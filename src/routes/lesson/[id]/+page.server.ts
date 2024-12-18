import { prisma } from '$lib/db';
import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	let lesson = await prisma.lesson.findUnique({
		where: {
			id: Number(event.params.id)
		},

		include: {
			upvotes: true
		}
	});

	let userId = Number((await event.locals.auth())?.user?.id);
	let hasVoted: boolean | null = false;

	if (!userId) hasVoted = null;
	else {
		lesson.upvotes.map((voter) => {
			if (voter.id === userId) {
				hasVoted = true;
			}
		});
	}

	if (!lesson) throw error(404, 'Lesson not found');

	return {
		lesson: lesson,
		hasVoted
	};
};

export const actions: Actions = {
	upvote: async (event) => {
		let user = await event.locals.auth();

		if (!user?.user) {
			throw redirect(302, '/signin');
		}

		let id = Number(event.params.id);

		const userId = Number(user.user.id);

		let alreadyVoted = await prisma.user.findUnique({
			where: {
				id: userId
			},
			include: {
				lessonVotes: {
					where: {
						id: id
					}
				}
			}
		});

		if (alreadyVoted?.lessonVotes.length > 0) {
			await prisma.lesson.update({
				where: {
					id: id
				},
				data: {
					upvotes: {
						disconnect: { id: userId }
					}
				}
			});

			return {
				success: true
			};
		}

		await prisma.lesson.update({
			where: {
				id: id
			},
			data: {
				upvotes: {
					connect: { id: userId }
				}
			}
		});

		return {
			success: true
		};
	},

	createNotebookPage: async (event) => {
		let user = await event.locals.auth();
		if (!user?.user) throw fail(403);

		const belongsToUser = {
			id: Number(user.user.id)
		};

		let userNotebook = await prisma.user
			.findUnique({
				where: belongsToUser
			})
			.notebook();

		if (!userNotebook) {
			userNotebook = await prisma.notebook.create({
				data: {
					authorId: Number(user.user.id)
				}
			});
		}

		let pageExists = await prisma.page.findMany({
			where: {
				Notebook: {
					id: userNotebook.id
				},
				onLesson: {
					id: Number(event.params.id)
				}
			}
		});

		if (pageExists.length > 0) {
			return;
		}

		await prisma.page.create({
			data: {
				text: '',
				Notebook: {
					connect: {
						id: userNotebook.id
					}
				},
        onLesson: {
					connect: {
						id: Number(event.params.id)
					}
				}
			}
		});

		return {
			success: true
		};
	}
};

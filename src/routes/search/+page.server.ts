import { prisma } from '$lib/db';
import type { Prisma } from '@prisma/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	let searchTerm = event.url.searchParams.get('searchTerm')?.toString();
	let tags = event.url.searchParams.get('tags')?.toString().split(',');

  if (!searchTerm) searchTerm = ""
  if (!tags) tags = []


	let prismaAdaptedTagInput = tags?.map((tagName) => ({
		tagName: {
			equals: tagName
		}
	}));

	let results = await prisma.lesson.findMany({
		where: {
			OR: [
				{
					title: {
						contains: searchTerm
					}
				},
				// {
				// 	tags: {
				// 		some: {
				// 			OR: prismaAdaptedTagInput
				// 		}
				// 	}
				// }
			]
		},
		include: {
			author: {
				select: {
					name: true
				}
			}
		}
	});

	return {
		results
	};
};

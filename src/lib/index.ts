import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createExampleUser() {
  try {
    const newUser = await prisma.user.create({
      data: {
        username: 'exampleUser',
        password: 'securepassword123',
        lessons: {
          create: [
            {
              title: 'Introduction to Prisma',
              description: 'Learn how to use Prisma with a PostgreSQL database.',
              text: 'Prisma is a modern ORM...',
              tags: {
                connectOrCreate: [
                  {
                    where: { tagName: 'Prisma' },
                    create: { tagName: 'Prisma' },
                  },
                ],
              },
              upvotes: 5,
              downvotes: 1,
              comments: {
                create: [
                  {
                    commentText: 'Great lesson!',
                    author: {
                      connect: { username: 'exampleUser' },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    });

    console.log('User created:', newUser);
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createExampleUser();

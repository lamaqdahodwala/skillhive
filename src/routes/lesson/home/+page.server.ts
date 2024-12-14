import { prisma } from "$lib/db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async(event) => {
  let lessons = await prisma.lesson.findMany({
    orderBy: {
      upvotes: {
        _count: "desc"
      }
    },
    include: {
      author: {
        select: {
          name: true
        }
      }
    },
    take: 10
  })

  return {lessons}
}

import { prisma } from "$lib/db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async(event) => {
  let lessons = await prisma.lesson.findMany({
    orderBy: {
      id: "desc"
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

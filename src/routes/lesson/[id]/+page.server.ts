import { prisma } from "$lib/db"
import { error } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async(event) => {
  let lesson = await prisma.lesson.findUnique({
    where: {
      id: Number( event.params.id )
    }
  })

  if (!lesson) throw error(404, "Lesson not found")

  return {
    lesson: lesson
  }
}

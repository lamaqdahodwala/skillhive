import { prisma } from "$lib/db"
import { error, redirect, type Actions } from "@sveltejs/kit"
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

export const actions: Actions = {
  upvote: async(event) => {
    let user = await event.locals.auth()

    if (!user?.user){
      throw redirect(302, "/signin")
    }
    
    let id = Number(event.params.id)

    await prisma.lesson.update({
      where: {
        id: id
      },
      data: {
        upvotes: {
          
        }
      }
    })
    
  }
}

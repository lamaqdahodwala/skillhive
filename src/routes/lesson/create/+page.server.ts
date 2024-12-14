import { fail, redirect, type Actions } from "@sveltejs/kit";
import { prisma } from '$lib/db'

export const actions: Actions = {
  default: async(event) => {
    let data = await event.request.formData()

    let title = data.get("title")?.toString()
    let description = data.get("description")

    if (!title) {
      throw fail(400, {
        missing: "title", 
        message: "Include a title"
      })
    }

    if  (!description) description = ""

    let user = await event.locals.auth()

    if (user?.user){
      throw redirect(302, "/signin")
    }


    await prisma.lesson.create({
      data: {
        title: title?.toString(), 
        description: description.toString()

      }
    })
  }
}

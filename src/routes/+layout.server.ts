import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async(event) => {
    let user = await event.locals.auth()

  return {
    user: user?.user
  }
}

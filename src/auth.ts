
import { SvelteKitAuth } from "@auth/sveltekit";
import Google from '@auth/sveltekit/providers/google'
import {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, AUTH_SECRET} from '$env/static/private'
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "$lib/db";

export const {handle, signIn, signOut} = SvelteKitAuth({
  providers: [Google({
    clientId: GOOGLE_CLIENT_ID, 
    clientSecret: GOOGLE_CLIENT_SECRET,
  })],
  secret: AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session({user, session}) {
      session.user.id = user.id
      return session
    }
  }
})

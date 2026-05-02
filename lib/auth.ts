import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
    } & DefaultSession['user']
  }
}

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }: { auth: any; request: { nextUrl: any } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
      const isOnCheckout = nextUrl.pathname.startsWith('/checkout')
      
      if (isOnDashboard || isOnCheckout) {
        if (isLoggedIn) return true
        return false // Redirect unauthenticated users to login page
      }
      return true
    },
  },
  providers: [], // Add providers with an empty array for now
}
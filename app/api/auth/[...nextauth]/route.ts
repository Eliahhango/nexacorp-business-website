import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        // Mock auth - in production, verify against database
        if (credentials.email === 'demo@nexacorp.com' && credentials.password === 'password') {
          return {
            id: '1',
            name: 'Demo User',
            email: 'demo@nexacorp.com',
          }
        }
        // Allow any credentials for demo purposes
        if (credentials.email && credentials.password.length >= 6) {
          return {
            id: '2',
            name: credentials.email.split('@')[0],
            email: credentials.email,
          }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET || 'nexacorp-secret-key-2024',
})

export { handler as GET, handler as POST }
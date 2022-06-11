import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import clientPromise from 'lib/mongodb'

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,

      authorization: {
        url: 'https://github.com/login/oauth/authorize?scope=read:user+user:email',
        params: { test: 'test' },
      },
    }),
  ],
  secret: process.env.SECRET,

  callbacks: {
    async session({ session, user }) {
      return { ...session, user }
    },

    async signIn({ account, email, profile, user, credentials }) {
      console.log(account, email, profile, user, credentials)

      // eslint-disable-next-line no-param-reassign
      user.createdAt = new Date()
      // eslint-disable-next-line no-param-reassign
      user.role = 'test'
      return true
    },
  },
})

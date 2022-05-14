import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  // callbacks: {
  //   async jwt({ token, account, user, profile, isNewUser }) {
  //     // console.log('jwt', { token, account, user, profile, isNewUser })
  //     // Persist the OAuth access_token to the token right after signin
  //     //   if (account) {
  //     //     token.accessToken = account.access_token
  //     //   }
  //     return token
  //   },
  //   async session({ session, token, user }) {
  //     // Send properties to the client, like an access_token from a provider.
  //     //   session.accessToken = token.accessToken

  //     // console.log('session', { session, token, user })
  //     return session
  //   },
  //   async signIn({ account, email, profile, user, credentials }) {
  //     // Send properties to the client, like an access_token from a provider.
  //     //   session.accessToken = token.accessToken

  //     console.log('signIn', { account, email, profile, user, credentials })
  //     return true
  //   },
  // },
})

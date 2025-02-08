export default defineEventHandler(async (event) => {
  console.log(process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID)
  console.log(process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET)
  console.log(process.env.NUXT_OAUTH_GOOGLE_REDIRECT_URI)

  return defineOAuthGoogleEventHandler({
    config: {
      clientId: process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET,
      redirectURL: process.env.NUXT_OAUTH_GOOGLE_REDIRECT_URI
    },
    async onSuccess(event, { user }) {
      await setUserSession(event, { user })
      return sendRedirect(event, '/todos')
    }
  })(event)
})

export default () => ({
  jwt: {
    secret: process.env.JWT_SECRET
  },
  googole: {
    clientId: process.env.GOOGLE_CLIENT_ID, 
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    callbackUrl: process.env.GOOGLE_CALLBACK_URL
  }
});

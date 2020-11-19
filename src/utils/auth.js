
const {skip} = require('graphql-resolvers')

const authenticateUser = (_, __, ctx) => {
  return ctx.req.sessionStore.isLoggedIn ? skip : new Error('Not authenticated yet.')
}

export default authenticateUser

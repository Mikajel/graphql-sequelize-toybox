import User from '../../database/models/user'

const login = async (_, {input: {email, password}}, ctx) => {
  if (ctx.req.sessionStore.isLoggedIn) {
    throw new Error('Already logged in!')
  }
  const user = await User.findOne({where: {email: email}})

  if (user?.pwd === password) {
    ctx.req.sessionStore.isLoggedIn = true
    return {
      email: user.email,
      name: user.name
    }
  } else {
    throw new Error('Email not registered')
  }
}
const logout = async (_, __, ctx) => {
  if (!ctx.req.sessionStore.isLoggedIn) {
    throw new Error('No account logged in!')
  }
  ctx.req.sessionStore.isLoggedIn = false
  return true
}

export default {
  login,
  logout
}

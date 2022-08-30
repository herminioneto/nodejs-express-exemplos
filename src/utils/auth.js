import { sign, verify } from 'jsonwebtoken'

const AUTH_SECRET = 'secret'

export const generateAccessToken = (data) => sign(data, 'secret')

export const verifyAccessToken = (req, res, next) => {
  try {
    const authorization = req.cookies.authorization
    if (!authorization) throw new Error('authorization_not_found')

    const user = verify(authorization, AUTH_SECRET)
    req.user = user
    next()

  } catch {
    res.status(401).send()
  }
}
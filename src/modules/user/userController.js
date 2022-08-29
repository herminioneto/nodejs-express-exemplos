import { Router } from 'express'
import { signup, login } from './userService'

const router = Router()

const AUTH_COOKIE_NAME = 'authorization'

router.post('/signup', (req, res) => {
  try {
    const token = signup(req.body)
    res.cookie(AUTH_COOKIE_NAME, token).status(201).send(token)
  } catch (err) {
    if (err.message === 'email_existente')
      return res.status(400).send(err.message)

    res.status(500).send(err.message)
  }
})

router.post('/login', (req, res) => {
  try {
    const token = login(req.body)
    res.cookie(AUTH_COOKIE_NAME, token).status(200).send(token)
  } catch (err) {
    if (err.message === 'email_nao_encontrado' || err.message === 'senha_incorreta')
      return res.status(400).send(err.message)

    res.status(500).send()
  }
})

export default router
import { Router } from 'express'
import { verifyAccessToken } from '../../utils/auth'

const router = Router()

router.post('/', verifyAccessToken, (req, res) => {
  res.send('CREATE POST /')
})

router.get('/:id?', verifyAccessToken, (req, res) => {
  // Duas opções: listar todos ou apenas um
  res.send('GET POST /')
})

export default router
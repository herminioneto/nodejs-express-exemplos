import { Router } from 'express'

const router = Router()

router.post('/', (req, res) => {
  res.send('CREATE POST /')
})

router.get('/:id?', (req, res) => {
  // Duas opções: listar todos ou apenas um
  res.send('GET POST /')
})

export default router
import { Router } from 'express'
import { Create, Delete, Get, Update } from '../controller/task.js'

const router = Router()

//GET
router.get('/task',Get)

//post
router.post('/task',Create)

//PUT
router.put('/task/:id',Update)
//DELETE
router.delete('/task/:id',Delete)


export default router
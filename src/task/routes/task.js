import { Router } from 'express'
import { Create } from '../controller/task.js'

const router = Router()


//post
router.post('/task',Create)

//get
export default router
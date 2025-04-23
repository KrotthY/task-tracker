import express from 'express'
import TaskRouter from './task/routes/task.js'
import { ErrorHandler } from './shared/error/handler.js'


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api/v1',TaskRouter)
app.use(ErrorHandler)

app.listen(port,()=>{
  console.log('Running port: ',port)
})
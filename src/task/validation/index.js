import { CreateRepo } from "../repositories/index.js"


export const CreateValidate = async (data)=>{
  if(!data){
    const error =  new Error('Data not found')
    error.status = 400
  }
  const responseRepo  =await CreateRepo(data)
  if(!data){
    const resError =  new Error('Data not found')
    resError.status = 404
  }
  return responseRepo
}
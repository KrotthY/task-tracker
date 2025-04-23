import { CreateRepo, DeleteRepo, getRepo, UpdateRepo } from "../repositories/index.js"

export const GetValidate = async (StatusId) =>{
  const responseRepo = await getRepo(StatusId)
  return responseRepo
}

export const CreateValidate = async (data)=>{
  if(!data){
    const error =  new Error('Data not found')
    error.status = 400
    throw error
  }
  const responseRepo  =await CreateRepo(data)
  if(!data){
    const resError =  new Error('Data not found')
    resError.status = 404
    throw resError
  }
  return responseRepo
}

export const UpdateValidate = async (Id,Data)=>{
  if(isNaN(Id)){
    const errorId = new Error('Id not found')
    errorId.status = 404
    throw errorId
  }
  const responseRepo = await UpdateRepo(Id,Data)
  return responseRepo
}

export const DeleteValidate = async (Id) =>{
  if(isNaN(Id)){
    const errorId = new Error('Id not found')
    errorId.status = 404
    throw errorId
  }
  const responseRepo = await DeleteRepo(Id)
  return responseRepo
}
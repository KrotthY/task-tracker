import { CreateValidate, DeleteValidate, GetValidate, UpdateValidate } from "../validation/index.js"


export const Get = async (req,res,next)=>{
  try {
    const StatusId = parseInt(req.query.statusid)
    const responseData = await GetValidate(StatusId)
    res.status(200).json({success:true, data:responseData})
  } catch (error) {
    next(error)
  }
}


export const Create = async (req,res,next) =>{
  try {  
    const DataBody = req.body
    const ResponseData = await CreateValidate(DataBody)
    res.status(200).json({success:true, data:ResponseData})
  } catch (error) {
    next(error)
  }
}

export const Update = async (req,res,next)=>{
  try {
    const Id = parseInt(req.params.id)
    const Data = req.body
    const ResponseData = await UpdateValidate(Id,Data)
    res.status(200).json({success:true,data:ResponseData})
  } catch (error) {
    next(error)
  }
}

export const Delete = async (req,res,next)=>{
  try{
    const Id = parseInt(req.params.id)
    const responseData = await DeleteValidate(Id)
    res.status(200).json({success:true,data:responseData})
  }catch(error){
    next(error)
  }
}


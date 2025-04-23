import { CreateValidate } from "../validation/index.js"


export const Create = async (req,res,next) =>{
  try {  
    const DataBody = req.body
    const ResponseData = await CreateValidate(DataBody)
    res.status(200).json({success:true, data:ResponseData})
  } catch (error) {
    next(error)
  }
}
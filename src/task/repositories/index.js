import { prisma } from "../../shared/config/prisma.js"

export const CreateRepo = async (FormData) =>{
  const responseDB = await prisma.task.create({
    data:{
      description:FormData.description
    },
    select:{
      id:true
    }
  })
  return responseDB
}
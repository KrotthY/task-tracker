import { prisma } from "../../shared/config/prisma.js"

export const getRepo = async (statusid) =>{

  const FilterTask = statusid ? { statusid: Number(statusid) }: {}

  const responseDB = await prisma.task.findMany({
    where: FilterTask
    ,
    select:{
      id:true,
      statusid:true,
      description:true,
    },

    orderBy:{
      createdat: "desc"
    }
  })
  return responseDB
}

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


export const UpdateRepo = async (Id,Data) =>{
  const responseDb = await prisma.task.update({
    data:{
      description:Data.description,
      statusid: Data.statusid,
    },
    where:{
      id:Id
    },
    select:{
      id:true
    }
  })
  return responseDb
}

export const DeleteRepo = async (Id)=>{
  const responseDB = await prisma.task.delete({
    where:{
      id:Id
    },
    select:{
      id:true
    }
  })
  return responseDB
}


import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const aggregate =async () =>{
    //avg age
    const avgAge = await prisma.user.aggregate({
        _avg:{
            age:true
        }
    })
    console.log(avgAge)

   

}

aggregate()
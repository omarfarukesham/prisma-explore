import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () =>{

    //fluent api like mongodb populate 
    const result = await prisma.user.findUnique({
        where:{
            id: 2
        },
        include:{
            post: true
        }
    })
    console.log(result)
 }

 main()
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main =async () =>{
    //find all
    const getAllData = await prisma.post.findMany()


    //find first
    const fingFS = await prisma.post.findFirstOrThrow({
        where:{
            id: 1
        }
    })


    const findUNQL = await prisma.post.findUniqueOrThrow({ 
        where:{
            id: 1
        }
        })
    console.log(fingFS)

}

main()
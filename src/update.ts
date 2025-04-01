import { PrismaClient } from "../generated/prisma";


const prisma = new PrismaClient()

const updates = async( )=>{
    const updatePost = await prisma.post.update({
        where:{
            id: 3
        },
        data:{
            title: "Prisma  post  update",
            content: "New content"
        }
    })
    console.log(updatePost)
}

updates()
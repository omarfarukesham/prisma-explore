import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main =async () =>{
    // const result = await prisma.post.create({
    //     data: {
    //         title: "Where is the project of prima",
    //         content: "No worries a lot of possibilies of prisma World!",
    //         authorName: "prisma author"
    //     },
    // })
    const getAllData = await prisma.post.findMany()
    console.log(getAllData)

}

main()
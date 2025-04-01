import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main =async () =>{
    //find all
    const createMany = await prisma.post.createMany({
        data: [
            {
                title: "Prisma post -1",
                content: "No worries a lot of possibilities of prisma World!",
                authorName: "prisma author1"
            },
            {
                title: "Prisma post -2",
                content: "Another interesting post",
                authorName: "prisma author2"
            },
            {
                title: "title -2",
                content: "No worries a lot of possibilities of prisma World!",
                authorName: "prisma author3"
            },
            {
                title: "Title -2",
                content: "Another interesting post",
                authorName: "prisma author3"
            },
            {
                title: "title -3",
                content: "No worries a lot of possibilities of prisma World!",
                authorName: "prisma author4"
            },
            {
                title: "Prisma -3",
                content: "Another interesting post",
                authorName: "prisma author5"
            },
            {
                title: "Prisma -3",
                content: "No worries a lot of possibilities of prisma World!",
                authorName: "prisma author6"
            },
            {
                title: "Prisma -4",
                content: "Another interesting post",
                authorName: "prisma author7"
            }
        ]
    })


    console.log(createMany)

}

main()
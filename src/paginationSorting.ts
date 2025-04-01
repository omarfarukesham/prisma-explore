import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const paginationSorting = async () =>{
    const getPaginationData = await prisma.post.findMany({
        skip: 0,
        take: 3,
       orderBy: {
           id: "desc"
       }
    })
    const getPaginationDataCursor = await prisma.post.findMany({
        skip: 0,
        take: 3,
       orderBy: {
           id: "desc"
       },
       cursor: { id: 5 }
    })

    console.log(getPaginationDataCursor)

}

paginationSorting()
import { PrismaClient, userRole } from "../generated/prisma";

const prisma = new PrismaClient();

const main =async () =>{
    //find all
    // const createMany = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "user1",
    //             email: "user1@gmail.com",
    //             role: userRole.user
    //         },
    //         {
    //             name: "user2",
    //             email: "user2@gmail.com",
    //             role: userRole.user
    //         }
           
    //     ]
    // })


    // const createProfile = await prisma.profile.create({
    //     data: {
    //         userId: 2,
    //         bio: "test bio 2",
    //     }
    // })

    // const createCategory = await prisma.category.createMany({
    //     data:[
    //         {
    //         name: "javascript",
    //         },
    //         {
    //             name: "typescript",
    //         },
    //         {
    //             name: "react",
    //         },
    //         {
    //             name: "graphql",
    //         },
    //         {
    //             name: "node",
    //         }
    // ]
    // })

    const createPost = await prisma.post.create({
        data:
        {
            title: "post1",
            content: "NOde js is now getting much popular around the world ... ",
            authorId: 1,
            postCategory: {
               create:{
                    category:{
                        connect: {
                            id: 1
                        }
                    }
               }
            }
        }
      

})

console.log(createPost)
}
main()
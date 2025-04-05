import { PrismaClient, userRole } from "../generated/prisma";

const prisma = new PrismaClient();

const batchTransaction = async () => {
    const createUserOp = prisma.user.create({
        data: {
          name: "user4",
          email: "user4@gmail.com",
          age: 23,
          role: userRole.user,
        }
    });

    const updateUserOp = prisma.user.update({
        where: {
            id: 3
        },
        data: {
            name: "user updated",
        }
    });

    const [userData, updateData] = await prisma.$transaction([
        createUserOp,
        updateUserOp
    ]);

}


batchTransaction()



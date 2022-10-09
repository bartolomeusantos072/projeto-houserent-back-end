import { prisma } from "../config/database";

export async function getImmovelForRentById(houseId:number) {
   
    return prisma.house.findFirst({
        where: {
            id: houseId,
        }
    })
    
}

export async function getAllImmovelForRent() {
   return await prisma.house.findMany({
    where:{
        availability:true,
    },
    include:{
        address:true,
        photos:true,
    }
   })
}
import { prisma } from "../config/database";
import { AddAddressHouse, AddPhotoHouse, CreateHouse } from "../utils/typeUtils";



async function insertHouse(proprietaryId: number, house: CreateHouse) {

    const houseRent = await prisma.house.create({
        data: {
            ...house, proprietaryId
        }
    });
    return houseRent;
}
async function insertAddress(houseId: number, address: AddAddressHouse) {

    const addressHouseRent = await prisma.addressHouse.create({
        data: {
            ...address, houseId
        }
    });
    return addressHouseRent;
}
async function insertPhotos(houseId: number, photos: AddPhotoHouse[]) {
    const photosMap = photos.map(
        async photo=>{
            await prisma.photosHouse.create({
                data:{
                    ...photo,houseId
                }
        })
    })
    
    return photosMap;
}

export async function createImmovelForRent(id: number, data: any) {
    const { house, address,photos, } = data;
    const addHouse = await insertHouse(id, house);
    const addAddress = await insertAddress(addHouse.id, address);
    const addPhotos = await insertPhotos(addHouse.id, photos);

    return { addHouse, addAddress, addPhotos }

}

export async function findImmovelForRent(proprietaryId: number, houseId: number) {

    return prisma.house.findFirst({
        where: {
            proprietaryId,
            id: houseId,
        }
    })

}
export async function findAllImmovelForRent(proprietaryId: number) {
    return prisma.house.findMany({
        where: {
            proprietaryId,
        }
    })

}

export async function deleteImmovelForRent(proprietaryId: number, houseId: number) {

    return prisma.house.delete({
        where: {
            id: houseId,
        }
    })

}

export async function deleteAllImmovelForRent(proprietaryId: number) {

    return prisma.house.deleteMany({
        where: {
            proprietaryId,
        }
    });

}

export async function getImmovelForRentById(houseId:number) {
   
    return prisma.house.findFirst({
        where: {
            id: houseId,
        }
    })
    
}

export async function getAllImmovelForRent() {
   return await prisma.house.findMany(
    
   )
}

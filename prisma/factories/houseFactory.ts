import { faker } from '@faker-js/faker';
import { AddressHouse, PhotosHouse } from '@prisma/client';
import { prisma } from "../../src/config/database";
import { AddPhotoHouse, CreateAddressHouse, CreateHouseRent } from '../../src/utils/typeUtils';


 async function createHouseRent(proprietaryId:number){
    const house = await prisma.house.create({
        data:{
            type: faker.helpers.shuffle([
                'house',
                'apartment',
                'kitnet',
              ])[0]!,
            dormitory: Number(faker.random.numeric(1)),
            bathrooms: Number(faker.random.numeric(1)),
            garage: Number(faker.random.numeric(1)),
            iptu: faker.random.alphaNumeric(10),
            price: faker.finance.amount(),
            condominium: faker.finance.amount(),
            wather: faker.helpers.shuffle([
                'registro individual',
                'registro dividido entre os moradores',
                'agua inclusa',
                'outro'
              ])[0]!,
            light: faker.helpers.shuffle([
                'relogio individual',
                'relogio dividido entre os moradores',
                'luz inclusa',
                'outro'
              ])[0]!,
              availability:faker.datatype.boolean(),
              proprietaryId,
        }
    })
    return house;
}

 async function createAddressHouseRent(houseId:number){
    const addressHouse = await prisma.addressHouse.create({
        data:{
            state: faker.address.state(),
            country: faker.address.country(),
            district: faker.address.cityName(),
            suburb: faker.address.city(),
            street: faker.address.street(),
            number: faker.address.buildingNumber(),
            complement: faker.commerce.productName(),
            zipCode: faker.address.zipCode(),
            referencePoint: faker.commerce.department(),
            houseId,   
        }
    });
    
    return addressHouse;
}
 

 async function createPhotosHouses(houseId:number) {
    const photo ={
        name:faker.image.imageUrl(), 
        houseId
    }
    const photos = await prisma.photosHouse.create({
            data:photo,
        });

    return photos;
}

const houseFactory = {
    createHouseRent,
    createAddressHouseRent,
    createPhotosHouses
}

export default houseFactory;

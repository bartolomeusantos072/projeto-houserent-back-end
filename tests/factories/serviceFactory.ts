import { faker } from '@faker-js/faker';
import { prisma } from "../../src/config/database";
import { CreateService } from '../../src/utils/typeUtils';

async function createServiceSupplierPhotos(serviceId:number) {
    const photo ={
        name:faker.image.imageUrl(), 
        serviceId
    }
    const photos = await prisma.photosService.create({
            data: photo
        });

    return photos;
}
/*
function createServiceSupplierInfo(){
    return{
        service:faker.name.jobTitle(),
        
        photos:{
            create:[
                {
                    name:faker.image.imageUrl(),
                },
                {
                    name:faker.image.imageUrl(),
                },
                {
                    name:faker.image.imageUrl(),
                },
                {
                    name:faker.image.imageUrl(),
                },
                ]
        }
    }
}
*/

async function createServiceSupplier(userId: number ){
    const service = await prisma.service.create({
       data:{
        title:faker.name.jobTitle(),
        userId
       }
    });

    return service;
}

const serviceFactory={
    createServiceSupplier,
    createServiceSupplierPhotos
}

export default serviceFactory;
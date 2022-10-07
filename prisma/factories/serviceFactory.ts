import { faker } from '@faker-js/faker';
import { prisma } from "../../src/config/database";
import { CreateService } from '../../src/utils/typeUtils';

async function createPhotosService(serviceId:number) {
    const photo ={
        name:faker.image.imageUrl(), 
        serviceId
    }
    const photos = await prisma.photosService.create({
            data: photo
        });

    return photos;
}

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
    createPhotosService
}

export default serviceFactory;
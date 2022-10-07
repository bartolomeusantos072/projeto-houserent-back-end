import { faker } from '@faker-js/faker';
import { prisma } from "../../src/config/database";
import { CreateService } from '../../src/utils/typeUtils';

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


async function createServiceSupplier(createServiceSupplierInfo: CreateService,userId: number ){
    const service = await prisma.service.create({
       data:{...createServiceSupplierInfo,userId}
    });

    return service;
}

const serviceFactory={
    createServiceSupplier,
    createServiceSupplierInfo
}

export default serviceFactory;
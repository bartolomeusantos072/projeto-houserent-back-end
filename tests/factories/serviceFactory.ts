import { faker } from '@faker-js/faker';
import { prisma } from "../../src/config/database";
import { CreateService } from '../../src/utils/typeUtils';

function createServiceSupplierInfo(userId:number){
    return{
        title:faker.name.jobTitle(),
        
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
        },
        userId,
        
    }
}


async function createServiceSupplier(createServiceSupplierInfo: CreateService ){
    const service = await prisma.service.create({
       data:{...createServiceSupplierInfo}
    });

    return service;
}

const serviceFactory={
    createServiceSupplier,
    createServiceSupplierInfo
}

export default serviceFactory;
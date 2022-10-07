import { faker } from '@faker-js/faker';
import { prisma } from "../../src/config/database";
import { CreateDriver, CreateService } from '../../src/utils/typeUtils';

function createDriverChangeInfo(){
    return{
        vehicle  :faker.vehicle.vehicle(),
        type:  faker.vehicle.type(),
        manufacturer  :faker.vehicle.manufacturer(),
        color  :faker.vehicle.color(),
        plate  :faker.vehicle.vrm() ,
        photos:{
            create:[
                {
                    name:faker.image.transport(),
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


async function createDriverChange(createDriverChangeInfo: CreateDriver,userId: number ){
    const service = await prisma.service.create({
       data:{...createDriverChangeInfo,userId}
    });

    return service;
}

const serviceFactory={
    createDriverChange,
    createDriverChangeInfo
}

export default serviceFactory;
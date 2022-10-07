import { faker } from '@faker-js/faker';
import { prisma } from "../../src/config/database";
import { CreateDriver } from '../../src/utils/typeUtils';

function createDriverChangeInfo(userId:number){
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
                }
                
                ]
        },userId,
    }
}


async function createDriverChange(createDriverChangeInfo: CreateDriver ){
    const driver = await prisma.driver.create({
       data:{...createDriverChangeInfo}
    });

    return driver;
}

const driverFactory={
    createDriverChange,
    createDriverChangeInfo
}

export default driverFactory;
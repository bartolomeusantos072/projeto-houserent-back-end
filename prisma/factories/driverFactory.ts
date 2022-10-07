import { faker } from '@faker-js/faker';
import { prisma } from "../../src/config/database";


async function createPhotosVehicle(driverId:number) {
    const photo ={
        imageUrl:faker.image.imageUrl(), 
        driverId
    }
    const photos = await prisma.photosDriver.create({
            data:photo
        });

    return photos;
}

async function createDriverChange(userId: number) {

    
    const driver = await prisma.driver.create({
        data: {
            vehicle: faker.vehicle.vehicle(),
            type: faker.vehicle.type(),
            manufacturer: faker.vehicle.manufacturer(),
            color: faker.vehicle.color(),
            plate: faker.vehicle.vrm(),
            userId,
        }
    });

    return driver;
}

const driverFactory = {
    createDriverChange,
    createPhotosVehicle
}

export default driverFactory;
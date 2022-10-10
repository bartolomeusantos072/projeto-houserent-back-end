import { prisma } from '../src/config/database';
import houseFactory from './factories/houseFactory';
import userFactory from './factories/userFactory';
import driverFactory from './factories/driverFactory';
import serviceFactory from './factories/serviceFactory';


async function main() {

    
    const createUser = await userFactory.signUp()
    
    const houseRent = await prisma.house.create({
        data:{
            ...houseFactory.createHouse(createUser.id)
        }
    });
    const addressHouseRent = await prisma.addressHouse.create({
        data:{
            ...houseFactory.createAddressHouse(houseRent.id)
        }
    })
    const photosHouse =await prisma.photosHouse.createMany({
        data:[
            {...houseFactory.createPhotoHouse(houseRent.id)},
            {...houseFactory.createPhotoHouse(houseRent.id)},
            {...houseFactory.createPhotoHouse(houseRent.id)}
        ]
    })

    const driver = await driverFactory.createDriverChange(createUser.id);
    const driverPhotos = await driverFactory.createPhotosVehicle(driver.id);

    const service = await serviceFactory.createServiceSupplier(createUser.id);
    const servicePhotos = await serviceFactory.createPhotosService(service.id);
    

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
import { House, PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';
import houseFactory from './factories/houseFactory';
import userFactory from './factories/userFactory';
import driverFactory from './factories/driverFactory';
import serviceFactory from './factories/serviceFactory';
const prisma = new PrismaClient()

async function main() {

    const createUser = await userFactory.signUp()
    //create house
    const house =await houseFactory.createHouseRent(createUser.id);
    const addressHouse = await houseFactory.createAddressHouseRent(house.id)
    const photosHouse = await houseFactory.createPhotosHouses(house.id)

    const createHouseRent = await prisma.house.create({
        data:{
            ...house,
            address:{
                create:{...addressHouse}
            },
            photos:{
                create:[
                    photosHouse,
                    photosHouse,
                    photosHouse,
                    photosHouse,
                ]
            }
        }
    });

    //create driver change
    const vehicle =await driverFactory.createDriverChange(createUser.id)
    const photosVehicle = await driverFactory.createPhotosVehicle(vehicle.id)
    const createDriverChange =await prisma.driver.create({
        data:{
            ...vehicle,
            photos:{
                create:[
                    photosVehicle,
                    photosVehicle,
                    photosVehicle,
                    photosVehicle,
                ]
            }
        }
    })
    
    const service =await serviceFactory.createServiceSupplier(createUser.id)
    const photosService = await driverFactory.createPhotosVehicle(vehicle.id)
    const createServiceSupplier =await prisma.service.create({
        data:{
            ...service,
            photos:{
                create:[
                    photosService,
                    photosService,
                    photosService,
                    photosService,
                ],
                
            }
        }
    })

    const user = await prisma.user.create({
        data: {
                ...createUser,
                houses: {
                    create:[
                        {...createHouseRent},
                        {...createHouseRent},
                        {...createHouseRent},
                    ]
                },
                drivers:{
                    create:[
                        {...createDriverChange},
                        {...createDriverChange},
                        {...createDriverChange},
                    ]
                },
                services:{
                    create:[
                        {...createServiceSupplier},
                        {...createServiceSupplier},
                        {...createServiceSupplier},
                    ]
                }     
        },
    
           
    });

    const users =await prisma.user.createMany({
        data:[
            user,
            user,
            user
        ],
        skipDuplicates: true,
    })

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
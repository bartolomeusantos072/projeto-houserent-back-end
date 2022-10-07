import userFactory from "../factories/userFactory";
import houseFactory from "../factories/houseFactory";
import { prisma } from "../../src/config/database";
import serviceFactory from "../factories/serviceFactory";
import driverFactory from "../factories/driverFactory";

// import { createOrder, Customer, OrderInput } from '../src/controller/index'

beforeAll(async () => {
    //create users
    const user1 = await userFactory.signUp();
    const user2 = await userFactory.signUp();
    const user3 = await userFactory.signUp();
    const user4 = await userFactory.signUp();

    await prisma.user.createMany({
        data: [user1, user2, user3, user4]
    })
    console.log(' 4 users successfully created!')


    // create houses
    const createHouseRentInfo1= houseFactory.createHouseRentInfo(),
          createHouseRentInfo2= houseFactory.createHouseRentInfo();

    await prisma.house.createMany({
        data: [
            { ...createHouseRentInfo1,proprietaryId:user1.id },
            { ...createHouseRentInfo2,proprietaryId:user2.id },
        ],
    })

    console.log(' 2 houses successfully created!')

    // create the service
    
    const service1 = serviceFactory.createServiceSupplierInfo(),
          service2 = serviceFactory.createServiceSupplierInfo();
    
    await prisma.service.createMany({
        data: [
            {...service1,userId:user2.id},
            {...service2,userId:user3.id},
        ],
    })
    console.log(' 2 service successfully created!')

//create Driver
    const driver1 = driverFactory.createDriverChangeInfo(),
          driver2 = driverFactory.createDriverChangeInfo();
    
    await prisma.driver.createMany({
        data: [
            {...driver1,userId:user1.id},
            {...driver2,userId:user4.id},
        ],
    })
    console.log(' 2 drive change successfully created!')


})

afterAll(async () => {
    const deleteUser = prisma.user.deleteMany();
    const deleteService = prisma.service.deleteMany();
    const deleteDriver = prisma.driver.deleteMany();
    const deleteHouse = prisma.house.deleteMany();
   
    await prisma.$transaction([
        deleteUser, deleteDriver, deleteHouse, deleteService
    ])

    await prisma.$disconnect()
})

it('should create 1 new user with 1 house', async () => {
    const user = await userFactory.signUp()
    const house = houseFactory.createHouseRentInfo(user.id,houseId);
    
    const createForRent = await houseFactory.createHouseRent(house)


    const newUser = await prisma.user.findUnique({
        where: {
            email: user.email,
        },
    })


    const newForRent = await prisma.house.findFirst({
        where: {
                proprietaryId: user.id,
        },
    })

    
    expect(newUser).toEqual(user)
   
    expect(newForRent).toHaveProperty('customerId', 2)
})
/*
it('should create 1 order with an existing customer', async () => {
    // The existing customers email
    const customer: Customer = {
        email: 'harry@hogwarts.io',
    }
    // The new orders details
    const order: OrderInput = {
        customer,
        productId: 1,
        quantity: 1,
    }

    // Create the order and connect the existing customer
    await createOrder(order)

    // Check if the new order was created by filtering on unique email field of the customer
    const newOrder = await prisma.customerOrder.findFirst({
        where: {
            customer: {
                email: customer.email,
            },
        },
    })

    // Expect the new order to have been created and contain the existing customer with an id of 1 (Harry Potter from the seed script)
    expect(newOrder).toHaveProperty('customerId', 1)
})

it("should show 'Out of stock' message if productId doesn't exit", async () => {
    // The existing customers email
    const customer: Customer = {
        email: 'harry@hogwarts.io',
    }
    // The new orders details
    const order: OrderInput = {
        customer,
        productId: 3,
        quantity: 1,
    }

    // The productId supplied doesn't exit so the function should return an "Out of stock" message
    await expect(createOrder(order)).resolves.toEqual(new Error('Out of stock'))
})
*/
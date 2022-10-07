import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt'
import { prisma } from "../../src/config/database";


interface Login { email: string, password: string };


function signIn() {
    const passwordLength = 10;
    return {
        email: faker.internet.email(),
        password: faker.internet.password(passwordLength)
    }

}

async function signUp(login: Login) {
    // const id = Math.floor(Date.now() * Math.random());
    const user = await prisma.user.create({
        data: {
            name: login.email,
            password: bcrypt.hashSync(login.password, 12),
            email: faker.internet.email(),
            phone: faker.phone.number('+55 32 #### ####'),
            cellphone: faker.phone.number('+55 32 #### #####'),
            cpf: faker.phone.number('###########'),
            observation: faker.lorem.text(),
            address: {
                create:{
                    state: faker.address.state(),
                    country: faker.address.country(),
                    district: faker.address.cityName(),
                    suburb: faker.address.city(),
                    street: faker.address.street(),
                    number: faker.address.buildingNumber(),
                    complement: faker.commerce.productName(),
                    zipCode: faker.address.zipCode(),
                    referencePoint: faker.commerce.department(),    
                }
            }
        }
    });

    return { ...user, plainPassword: login.password };
}




const userFactory = {
    signIn,
    signUp
}

export default userFactory;

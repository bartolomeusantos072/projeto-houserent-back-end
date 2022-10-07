import { faker } from '@faker-js/faker';

import { prisma } from "../../src/config/database";

import { createHouseRent } from '../../src/utils/typeUtils';



function createHouseRentInfo() {
    return {
        type: faker.helpers.shuffle([
            'house',
            'apartment',
            'kitnet',
          ])[0]!,
        dormitory: faker.random.numeric(1),
        bathrooms: faker.random.numeric(1),
        garage: faker.random.numeric(1),
        iptu: faker.random.alphaNumeric(10),
        price: faker.finance.amount(),
        condominium: faker.finance.amount(),
        wather: faker.helpers.shuffle([
            'registro individual',
            'registro dividido entre os moradores',
            'agua inclusa',
            'outro'
          ])[0]!,
        ligth: faker.helpers.shuffle([
            'relogio individual',
            'relogio dividido entre os moradores',
            'luz inclusa',
            'outro'
          ])[0]!,


    }

}



async function createHouseRent(createHouseRentInfo:createHouseRent, proprietaryId: number) {
    const service = await prisma.house.create({
            data: { ...createHouseRentInfo, proprietaryId }
        });

    return service;
}

const serviceFactory = {
    createHouseRent,
    createHouseRentInfo
}

export default serviceFactory;
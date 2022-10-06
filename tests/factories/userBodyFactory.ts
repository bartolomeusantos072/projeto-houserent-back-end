import { faker } from "@faker-js/faker";

import { prisma } from "../../src/config/database";


export default function userBodyFactory() {
  return {
    name: faker.name.fullName(),
    password:faker.internet.password(),
    email: faker.internet.email(),
    phone: faker.phone.number('+55 32 #### ####'),
    cellphone: faker.phone.number('+55 32 #### #####'),
    cpf: faker.phone.number('###########'),
    observation: faker.lorem.text(),
    adress:{
      state:faker.address.state(),
      county: faker.address.country(),
      district: faker.address.cityName(),
      suburb: faker.address.city(),
      street: faker.address.street(),
      number: faker.random.numeric(),
      complement: faker.company.name(),
      zipCode: faker.address.zipCode(),
      referencePoint: faker.company.catchPhraseAdjective(),
    }

  }
}
import { faker } from '@faker-js/faker';
import { prisma } from "../../src/config/database";


function createHouse(proprietaryId:number) {
  const house = {
    type: faker.helpers.shuffle([
      'house',
      'apartment',
      'kitnet',
    ])[0]!,
    dormitory: Number(faker.random.numeric(1)),
    bathrooms: Number(faker.random.numeric(1)),
    garage: Number(faker.random.numeric(1)),
    iptu: faker.random.alphaNumeric(10),
    price: faker.finance.amount(),
    condominium: faker.finance.amount(),
    wather: faker.helpers.shuffle([
      'registro individual',
      'registro dividido entre os moradores',
      'agua inclusa',
      'outro'
    ])[0]!,
    light: faker.helpers.shuffle([
      'relogio individual',
      'relogio dividido entre os moradores',
      'luz inclusa',
      'outro'
    ])[0]!,
    availability: faker.datatype.boolean(),
    observation: faker.lorem.text(),
    proprietaryId
  }

  return house;
}

function createAddressHouse(houseId:number) {
  const addressHouse = {
    state: faker.address.state(),
    country: faker.address.country(),
    district: faker.address.cityName(),
    suburb: faker.address.city(),
    street: faker.address.street(),
    number: faker.address.buildingNumber(),
    complement: faker.commerce.productName(),
    zipCode: faker.address.zipCode(),
    referencePoint: faker.commerce.department(),
    houseId,
  }

  return addressHouse;
}


 function createPhotoHouse(houseId:number) {
  const photo = {
    name: faker.image.imageUrl(),
    houseId
  }


  return photo;
}

const houseFactory = {
  createHouse,
  createAddressHouse,
  createPhotoHouse
}

export default houseFactory;

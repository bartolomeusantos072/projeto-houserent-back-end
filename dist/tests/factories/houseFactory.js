"use strict";
exports.__esModule = true;
var faker_1 = require("@faker-js/faker");
function createHouse(proprietaryId) {
    var house = {
        type: faker_1.faker.helpers.shuffle([
            'house',
            'apartment',
            'kitnet',
        ])[0],
        dormitory: Number(faker_1.faker.random.numeric(1)),
        bathrooms: Number(faker_1.faker.random.numeric(1)),
        garage: Number(faker_1.faker.random.numeric(1)),
        iptu: faker_1.faker.random.alphaNumeric(10),
        price: faker_1.faker.finance.amount(),
        condominium: faker_1.faker.finance.amount(),
        wather: faker_1.faker.helpers.shuffle([
            'registro individual',
            'registro dividido entre os moradores',
            'agua inclusa',
            'outro'
        ])[0],
        light: faker_1.faker.helpers.shuffle([
            'relogio individual',
            'relogio dividido entre os moradores',
            'luz inclusa',
            'outro'
        ])[0],
        availability: faker_1.faker.datatype.boolean(),
        observation: faker_1.faker.lorem.text(),
        proprietaryId: proprietaryId
    };
    return house;
}
function createAddressHouse(houseId) {
    var addressHouse = {
        state: faker_1.faker.address.state(),
        country: faker_1.faker.address.country(),
        district: faker_1.faker.address.cityName(),
        suburb: faker_1.faker.address.city(),
        street: faker_1.faker.address.street(),
        number: faker_1.faker.address.buildingNumber(),
        complement: faker_1.faker.commerce.productName(),
        zipCode: faker_1.faker.address.zipCode(),
        referencePoint: faker_1.faker.commerce.department(),
        houseId: houseId
    };
    return addressHouse;
}
function createPhotoHouse(houseId) {
    var photo = {
        name: faker_1.faker.image.imageUrl(),
        houseId: houseId
    };
    return photo;
}
var houseFactory = {
    createHouse: createHouse,
    createAddressHouse: createAddressHouse,
    createPhotoHouse: createPhotoHouse
};
exports["default"] = houseFactory;
//# sourceMappingURL=houseFactory.js.map
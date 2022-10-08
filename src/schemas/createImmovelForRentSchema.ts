import joi from "joi"

const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jp(e?)g|gif|png|webp|svg)/;

export const photosHouse = joi.object({
    name:  joi.string().pattern(regex).required().trim(),
    houseId:joi.number().required(),  
})

export const addressHouse = joi.object( {
    state: joi.string().required(),
    country: joi.string().required(),
    district:joi.string().allow(""),
    suburb: joi.string().required(),
    street: joi.string().required(),
    number: joi.string().required(),
    complement: joi.string().allow(""),
    zipCode: joi.string().length(8).required(),
    referencePoint:joi.string().required(),
    houseId: joi.number().required(),   
  })

export const createImmovelForRentSchema = joi.object({
    type:joi.string().valid('house').valid('apartment').valid('kitnet').valid('casa').valid('apartmento').required(),
    dormitory     :joi.number().required(),
    bathrooms     :joi.number().required(),
    garage        :joi.number().required(),
    iptu          :joi.string().required(),        
    price         :joi.string().required(),
    condominium   :joi.string().required(),
    wather        :joi.string().valid("individual").valid("dividido entre os moradores").valid("isento").valid("outro").required(),
    light         :joi.string().valid("individual").valid("dividido entre os moradores").valid("isento").valid("outro").required(),
    availability  :joi.boolean().required(),
    observation   :joi.string().allow("").required(),
    proprietaryId :joi.number().required(),
    address: addressHouse.required(),     
    photos: joi.array().items(photosHouse).required()
})



import joi from "joi";

export const signUp = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi.ref('password'),
  phone: joi.string().min(10).max(11).required(),
  cellphone: joi.string().length(11).required(),
  cpf: joi.string().length(11).required(),
  address: {
    state: joi.string().required(),
    country: joi.string().required(),
    district:joi.string().allow(""),
    suburb: joi.string().required(),
    street: joi.string().required(),
    number: joi.string().required(),
    complement: joi.string().allow(""),
    zipCode: joi.string().length(8).required(),
    referencePoint:joi.string().required(),   
  }

});


export const signIn = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
});


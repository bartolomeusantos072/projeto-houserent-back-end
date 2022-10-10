import joi from "joi";

export const availabilityImmovelSchema = joi.object({
    availability  :joi.boolean().required(),
})
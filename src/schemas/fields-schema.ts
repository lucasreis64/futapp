import Joi from "joi";

export const fieldsSchema = Joi.object({
  place_id: Joi.number().integer().required(),
  name: Joi.string().required(),
  type_id: Joi.number().integer().required(),
});

export const updateNameSchema = Joi.object({
  name: Joi.string().required(),
});

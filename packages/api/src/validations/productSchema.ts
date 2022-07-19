import Joi from 'joi';
import { ProductT } from '../types/product';

const productSchema = Joi.object({
  name: Joi.string().required().min(3).max(100),
  description: Joi.string().required(),
  price: Joi.number().required()
});

const createProductValidation = (input: ProductT): ProductT => {
  try {
    productSchema.validate(input);
    return input;
  } catch (error){
    throw new Error(error)
  }
}

export {
  createProductValidation,
};
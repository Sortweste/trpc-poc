import Joi from 'joi';
import { PaginationT } from 'src/types/generics';
import { ProductT } from '../types/product';

const productSchema = Joi.object({
  name: Joi.string().min(3).max(100),
  description: Joi.string(),
  price: Joi.number()
});

const paginationSchema = Joi.object({
  page: Joi.number(),
  limit: Joi.number()
});

const createProductValidation = (input: ProductT): ProductT => {
  try {
    productSchema.options({ presence: 'required' }).validate(input);
    return input;
  } catch (error){
    throw new Error(JSON.stringify(error))
  }
}

const updateProductValidation = (input: ProductT): ProductT => {
  try {
    Joi.object({
      ...productSchema,
      id: Joi.number().required(),
    }).validate(input);
    return input;
  } catch (error){
    throw new Error(JSON.stringify(error))
  }
}

const getProductsValidation = (input: PaginationT): PaginationT => {
  try {
    paginationSchema.validate(input);
    return input;
  } catch (error){
    throw new Error(JSON.stringify(error))
  }
}

export {
  createProductValidation,
  updateProductValidation,
  getProductsValidation,
};
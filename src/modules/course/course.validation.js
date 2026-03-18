import joi from "joi";


export const courseSchema = joi.object({
    title: joi.string().min(2).max(100).required(),
    description: joi.string().min(10).max(500).required(),
    price: joi.number().positive().required(),
    thumbnail: joi.string(),
    category: joi.string().min(2).max(50).required(),
  });
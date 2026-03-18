import joi from "joi";


 export const sessionSchema = joi.object({
    title: joi.string().min(2).max(100).required(),
    order: joi.number().integer().positive().required(),
    filePath: joi.string().required(),
    duration: joi.string().required(),
    courseId: joi.string().required(),
  });


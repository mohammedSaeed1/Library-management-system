import { text } from "express";
import joi from "joi";


 export const questionSchema = joi.object({
    text: joi.string().min(2).max(100).required(),
    options: joi.array().items(joi.string().min(2).max(100)).min(2).required(),
    correctAnswerIndex: joi.number().integer().min(0).required(),
  });


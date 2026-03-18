import joi from "joi";


 export const userSchema = joi.object({
    name: joi.string().min(2).max(100).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    confirmPassword: joi.string().valid(joi.ref('password')).required().messages({'any.only': 'Confirm password must match password'}),
    role: joi.string().valid('admin', 'teacher', 'student').default('student'),
    isActive: joi.boolean().default(true),
    profilePicture: joi.string()
  });


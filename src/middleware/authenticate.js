import jwt from 'jsonwebtoken';
 
const SECRET_KEY = `ntiCourseExamPlatform`;


export const authenticate = (req , res , next) =>{
 try{
    const {token} = req.headers;
     const decoded = jwt.verify(token,SECRET_KEY);
     console.log(decoded,"decoded!!");
 }
 catch(error){
    res.status(401).json({message:"Invalid token"});
 }
} 
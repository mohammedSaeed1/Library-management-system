import jwt from 'jsonwebtoken';

export const authorize = (req , res , next) =>{
 try{
    const {token} = req.headers;
    console.log(token);
    
 }
 catch(error){
    res.status(401).json({message:"Invalid token"});
 }
} 
import { User } from "../../database/model/user.model.js";

export const getAllUsers = async (req , res) =>{
     const users = await User.find();
     if(users.length <= 0)
        res.status(404).json({message: "No users avaliable right now !"});
    else{
        res.status(200).json({message:"success",data:users});
    }
}
export const getUserById = async (req , res) =>{
     const {userId} = req.params;
    const user = await User.findById(userId);
     if(!user) return res.status(404).json({message: "No user found !"});
     res.status(200).json({message: "success",data:user});      
} 
export const banUser = async (req , res) =>{
     const {userId} = req.params;
    const user = await User.findById(userId);
     if(!user) return res.status(404).json({message: "No user found !"});
     user.isActive = false;     
     await user.save();
} 
export const unbanUser = async (req , res) =>{
     const {userId} = req.params;
    const user = await User.findById(userId);
     if(!user) return res.status(404).json({message: "No user found !"});
     user.isActive = true;     
     await user.save();
} 
export const deleteUser = async (req , res) =>{
     const {userId} = req.params;
    const user = await User.findById(userId);
     if(!user) return res.status(404).json({message: "No user found !"});
     const deletedUser = await User.findByIdAndDelete(userId);     
     user ? res.status(200).json({message: "deleted success"}) :
     res.status(500).json({message: "something went wrong !!"})
    } 
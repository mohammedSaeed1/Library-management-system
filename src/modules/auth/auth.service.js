import { User } from "../../database/model/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    const { name, email, password, role} = req.body;
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User email already exsist" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await User.create({ name, email, password: hashedPassword, role});
    if (!createdUser) return res.status(500).json({ message: "Can't Add this user ,something went wrong !!" })
    res.status(201).json({ message: "user created successfully", createdUser })
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "user email is incorrect!!" });
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) return res.status(404).json({ message: "user password is incorrect!!" });
    const userId = user._id;
    const role = user.role;
    const SECRET_KEY = `ntiCourseExamPlatform`;
    const token = jwt.sign({ userId, role }, SECRET_KEY,{expiresIn: "7d"});
    res.status(200).json({message:"success",token});
}
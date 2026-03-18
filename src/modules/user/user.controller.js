import { Router } from "express";
import { getAllUsers,getUserById,banUser,unbanUser,deleteUser } from "./user.service.js";

const router = Router();

 
router.get('/',getAllUsers);
router.get('/:userId',getUserById);
router.patch('/:userId/ban',banUser);
router.patch('/:userId/unban',unbanUser);
router.delete('/:userId',deleteUser);


export default router;
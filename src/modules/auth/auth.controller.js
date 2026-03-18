import { Router } from "express";
import { register , login } from "./auth.service.js"; 
import { authenticate } from "../../middleware/authenticate.js";


const router = Router();

 
router.post('/register', register);
router.post('/login', login);


export default router;
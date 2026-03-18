import { Router } from "express";
import { createCourse } from "./course.service.js";

const router = Router();

 
router.post('/',createCourse);



export default router;
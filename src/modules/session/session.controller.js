import { Router } from "express";
import {createSession ,getAllSessions} from "./session.service.js";

const router = Router();

 
router.post('/api/courses/:courseId/sessions',createSession);
router.get('/api/courses/:courseId/sessions',getAllSessions);


export default router;
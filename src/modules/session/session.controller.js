import { Router } from "express";
import {createSession ,getAllSessions , updateSession , deleteSession} from "./session.service.js";

const router = Router();

 
router.post('/api/courses/:courseId/sessions',createSession);
router.get('/api/courses/:courseId/sessions',getAllSessions);
router.put('/api/courses/:courseId/sessions/:sessionId',updateSession);
router.delete('/api/courses/:courseId/sessions/:sessionId',deleteSession);


export default router;
import { Router } from "express";
import {createQuestion , getAllQuestions , updateQuestion , deleteQuestion} from "./question.service.js";

const router = Router();

 
router.post('/:sessionId',createQuestion);
router.get('/:sessionId',getAllQuestions);
router.put('/:questionId',updateQuestion);
router.delete('/:questionId',deleteQuestion);


export default router;
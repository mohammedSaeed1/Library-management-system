import { Router } from "express";
import { createCourse , getAllCourses , getCourseById , getOwnCourse , editCourse , deleteCourse } from "./course.service.js";

const router = Router();

 
router.post('/',createCourse);
router.get('/',getAllCourses);
router.get('/:courseId',getCourseById);
router.get('/own',getOwnCourse);
router.put('/:courseId',editCourse);
router.delete('/:courseId',deleteCourse);


export default router;
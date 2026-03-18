import { Course } from "../../database/model/course.model.js";
import { courseSchema } from "./course.validation.js";

export const createCourse = async (req, res) => {
    const { title, description, price, category, thumbnail } = req.body;
    courseSchema.validateAsync(req.body).catch(err => {
        return res.status(400).json({message:err.details[0].message});
    });

    const course = await Course.create({ title, description, price, category, thumbnail });
    course ? res.status(201).json({ message: "success", data: course }) :
        res.status(500).json({ message: "something went wrong !!" });
}
export const getAllCourses = async (req, res) => {
    const courses = await Course.find();
    if (courses.length <= 0)
        res.status(404).json({ message: "No courses avaliable right now !" });
    else {
        res.status(200).json({ message: "success", data: courses });
    }
}
export const getCourseById = async (req, res) => {
    const { courseId } = req.params;
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "No course found !" });
    res.status(200).json({ message: "success", data: course });
}
export const editCourse = async (req, res) => {
    const { courseId } = req.params;
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "No course found !" });
    const updatedFilelds = {};
    const fileds = ["title", "description", "price", "thumbnail", "category"];
    fileds.forEach((field) => {
        if (req.body[field] != undefined) {
            updatedFilelds[field] = req.body[field]
        }
    })
    if (updatedFilelds.title) {
        const title = await Course.findOne({ title: updatedFilelds.title })
        if (title) { return res.status(400).json({ message: "Title is exsist" }) }
    }
    courseSchema.validateAsync(updatedFilelds).catch(err => {
        return res.status(400).json({message:err.details[0].message});
    });

    const updatedCourse = await Course.findByIdAndUpdate(courseId, updatedFilelds, { returnDocument: "after" });
    res.status(200).json({ message: "success", data: updatedCourse })
}
export const deleteCourse = async (req, res) => {
    const { courseId } = req.params;
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "No course found !" });
    const deletedCourse = await Course.findByIdAndDelete(courseId);
    deletedCourse ? res.status(200).json({ message: "deleted success" }) :
        res.status(500).json({ message: "something went wrong !!" })
} 
export const getOwnCourse = async (req , res) => {   
}
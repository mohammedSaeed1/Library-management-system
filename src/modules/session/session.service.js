import {Session} from "../../database/model/session.model.js";
import {sessionSchema} from "./session.validation.js";

export const createSession = async (req , res) => {
    const { courseId } = req.params;
    const {title,order,filePath,duration} = req.body;
    sessionSchema.validateAsync(req.body).catch(err => {
        return res.status(400).json({message:err.details[0].message});
    });
    const createdSession = await Session.create({title,order,courseId,filePath,duration});
    if(!createdSession) return res.status(500).json({message:"Can't create this session ,something went wrong!!"});
    res.status(201).json({message:"session created successfully",data:createdSession});
}

export const getAllSessions = async (req , res) => {
    const { courseId } = req.params;
    const sessions = await Session.find({courseId});
    sessions.length === 0 && res.status(404).json({message:"No sessions found for this course!!"});
    res.status(200).json({message:"success",data:sessions});
}

export const getSessionById = async (req , res) => {
    const { sessionId } = req.params;
    const session = await Session.findById(sessionId);
    if(!session) return res.status(404).json({message:"No session found with this id!!"});
    res.status(200).json({message:"success",data:session});
}

export const updateSession = async (req , res) => {
    const { sessionId } = req.params;
    const {title,order,filePath,duration} = req.body;
        sessionSchema.validateAsync(req.body).catch(err => {
        return res.status(400).json({message:err.details[0].message});
    });
    const updatedSession = await Session.findByIdAndUpdate(sessionId, {title,order,filePath,duration}, { new: true });
    if(!updatedSession) return res.status(404).json({message:"No session found with this id!!"});
    res.status(200).json({message:"success",data:updatedSession});
}

export const deleteSession = async (req , res) => {
    const { sessionId } = req.params;
    const deletedSession = await Session.findByIdAndDelete(sessionId);
    if(!deletedSession) return res.status(404).json({message:"No session found with this id!!"});
    res.status(200).json({message:"success",data:deletedSession});
}

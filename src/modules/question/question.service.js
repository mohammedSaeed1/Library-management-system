import { Question } from './../../database/model/question.model.js';


export const createQuestion = async (req , res) => {
    const { sessionId } = req.params;
    const {text,options,correctAnswerIndex} = req.body;
    const createdQuestion = await Question.create({text,options,correctAnswerIndex,sessionId});
    if(!createdQuestion) return res.status(500).json({message:"Can't create this question ,something went wrong!!"});
    res.status(201).json({message:"question created successfully",data:createdQuestion});
}

export const getAllQuestions = async (req , res) => {
    const { sessionId } = req.params;
    const questions = await Question.find({sessionId});
    questions.length === 0 && res.status(404).json({message:"No questions found for this session!!"});
    res.status(200).json({message:"success",data:questions});
}

export const updateQuestion = async (req , res) => {
    const { questionId } = req.params;
    const {text,options,correctAnswerIndex} = req.body;
    const updatedQuestion = await Question.findByIdAndUpdate(questionId, {text,options,correctAnswerIndex}, { new: true });
    if(!updatedQuestion) return res.status(404).json({message:"No question found with this id!!"});
    res.status(200).json({message:"success",data:updatedQuestion});
}

export const deleteQuestion = async (req , res) => {
    const { questionId } = req.params;
    const deletedQuestion = await Question.findByIdAndDelete(questionId);
    if(!deletedQuestion) return res.status(404).json({message:"No question found with this id!!"});
    res.status(200).json({message:"success",data:deletedQuestion});
}

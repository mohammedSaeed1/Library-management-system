import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    session:{
        type: mongoose.Types.ObjectId,
        ref: "sessions",
        required : true,
    },
     text:{
        type: String,
        required : true 
       },
     options:{
        type: [String],
        required : true
    },
    correctAnswerIndex:{
        type : Number,
        required : true
    }
},{ timestamps: true })

export const Question = mongoose.model(`Question`,questionSchema);
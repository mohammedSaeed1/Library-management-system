import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title:{
        type: String,
        required : true,
        unique: true
    },
     description:{
        type: String,
        required : true 
       },
     price:{
        type: Number,
        required : true
    },
    teacher:{
        type : mongoose.Types.ObjectId,
        ref : "users"
    },
     thumbnail:{
        type: String,
    },
    category:{
        type: String,
        required : true
    }
},{ timestamps: true })

export const Course = mongoose.model(`Course`,courseSchema);
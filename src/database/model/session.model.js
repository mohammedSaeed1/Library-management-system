import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    title:{
        type: String,
        required : true,
    },
     order:{
        type: Number,
        required : true 
       },
     course:{
        type: mongoose.Types.ObjectId,
        ref: "courses",
        required : true
    },
    filePath:{
        type : String,
        required : true
    },
     duration:{
        type: String,
        required : true
    },
},{ timestamps: true })

export const Session = mongoose.model(`Session`,sessionSchema);
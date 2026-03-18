import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
    student:{
        type: mongoose.Types.ObjectId,
        ref: "users",
        required : true,
    },
     course:{
        type: mongoose.Types.ObjectId,
        ref: "courses",
        required : true
       },
     enrolledAt:{
        type: Date,
        required : true
    },
    completedSessions:{
        type : [mongoose.Types.ObjectId],
        ref: "sessions",
        required : true
    }
},{ timestamps: true })

export const Enrollment = mongoose.model(`Enrollment`,enrollmentSchema);
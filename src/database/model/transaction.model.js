import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    student: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true,
    },
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    course: {
        type: mongoose.Types.ObjectId,
        ref: "courses",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    status:{
        type : String,
        enum: ['pending' , 'success' , 'falied']
    }
}, { timestamps: true })
    
export const Transaction = mongoose.model(`Transaction`, transactionSchema);
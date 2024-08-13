import mongoose from "mongoose";
import { Schema } from "mongoose";

const schema = new Schema({
    feedUsername: String,
    feedEmail: String,
    feedPhone: Number,
    feedMsg: String 
})

export const Feedback = mongoose.model("feedback", schema);
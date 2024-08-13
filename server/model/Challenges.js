import mongoose from "mongoose";
import { Schema } from "mongoose";

const schema = new Schema({
    title: String,
    image: String,
    description: String,
    button: String,
    isJoin: Boolean,
});

export const Challenges = mongoose.model("challenges", schema)
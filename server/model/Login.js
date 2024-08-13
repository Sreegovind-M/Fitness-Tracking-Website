import mongoose from "mongoose";
import { Schema } from "mongoose";


const schema = new Schema({
    email: String,
    password: String,
    userName: String
})

export const Login = mongoose.model("login", schema);
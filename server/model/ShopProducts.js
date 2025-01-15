import mongoose from "mongoose";
import { Schema } from "mongoose";

const schema = new Schema({
    prodName: String,
    prodPrice: Number,
    prodDescrip: String,
    prodImage: String
});

export const ShopProducts = mongoose.model("shopProducts", schema);
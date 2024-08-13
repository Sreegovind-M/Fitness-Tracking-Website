import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const schema = new Schema({
    title: String,
    image: String,
});

const BalancedDiet = mongoose.model("BalancedDiet", schema);

export default BalancedDiet;
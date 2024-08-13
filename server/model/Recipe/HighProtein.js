import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const schema = new Schema({
    title: String,
    image: String,
});

const HighProtein = mongoose.model("HighProtein", schema);

export default HighProtein;
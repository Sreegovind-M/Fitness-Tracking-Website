import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const schema = new Schema({
    title: String,
    image: String,
});

const LowCarb = mongoose.model("LowCarb", schema);

export default LowCarb;
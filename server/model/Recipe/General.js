import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const schema = new Schema({
    title: String,
    image: String,
});

const General = mongoose.model("General", schema);

export default General;
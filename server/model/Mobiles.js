import { Schema} from "mongoose";
import mongoose from "mongoose";

const schema = new Schema({
    plot: String,
    genres: Array,
    runtime: Number,
    // cast: Array,
    // poster: String,
    // title: String,
    // fullplot: String,
    // languages: Array,
    // released: Date,
    // director: Array,
    // rated: String,
    // awards: Object,
    // lastupdated: String,
    // year: Number,
    // imdb: Object,
    // countries: Array,
});

export const Mobiles = mongoose.model("mobiles", schema, "movies");
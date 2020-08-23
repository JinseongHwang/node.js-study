import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: String,
    category: String,
    body: String,
    // writer: String,
    date: Date,
});

const model = mongoose.model("Post", PostSchema);

export default model;
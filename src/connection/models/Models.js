import mongoose from "mongoose";
import { Schema } from "mongoose";
import ConnectMongo from "../Connection";

ConnectMongo();
const TopicSchemas = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Topicmodel = mongoose.models.Topic || mongoose.model('Topic', TopicSchemas);
export default Topicmodel;
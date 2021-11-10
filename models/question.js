// Imports
const mongoose = require("mongoose");
const {Schema} = mongoose;
const {ObjectId} = Schema;

const questionSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        maxlength: 200
    },
    questionName: {
        type: String,
        trim: true,
        required: true,
        maxlength: 200
    },
    options: {
        type: Array,
        required: true
    },
    correct: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Question", questionSchema);

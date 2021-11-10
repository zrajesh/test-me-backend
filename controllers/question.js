// Imports
const Question = require("../models/question");

exports.getQuestionById = (req, res, next, id) => {
    Question.findById(id)
    .populate("category")
    .exec((err, question) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        req.question = question;
        next();
    })
}

// Create question
exports.createQuestion = (req, res) => {
    const {title, questionName, options, category, correct, id} = req.body;
    if (
        !title ||
        !questionName ||
        !options ||
        !correct ||
        !id ||
        !category
    ) {
        return res.status(400).json({
            message: "please add all the fields"
        })
    }
    let question = new Question(req.body);
    question.save((err, question) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json({
            message: "question saved successfully"
        })
    })
}

// Get all questions
exports.getAllQuestion = (req, res) => {
    Question.find().exec((err, question) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json(question)
    })
}

// Get all question by category
exports.getAllQuestionByCategory = (req, res) => {
    let categoryId = req.params.category;

    Question.find({category: categoryId}).exec((err, questions) => {
        if(err) {
            return res.status(400).json({
                error: "Category does not exist"
            })
        }
        res.json(questions)
    })
}

// Imports
const express = require("express");
const router = express.Router();
// Import controller
const { getCategoryById } = require("../controllers/category");
const {
    getQuestionById,
    getAllQuestion,
    getAllQuestionByCategory,
    createQuestion
} = require("../controllers/question");

// Params
router.param("categoryId", getCategoryById);
router.param("questionId", getQuestionById);
// Routes
// Create
router.post("/question/create", createQuestion);
// Read
router.get("/questions", getAllQuestion);
router.get("/questions/:category", getAllQuestionByCategory);

module.exports = router;

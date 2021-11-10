// Imports
const express = require("express");
const router = express.Router();
// Import controller
const {
    getCategoryById, 
    createCategory
} = require("../controllers/category");
// Params
router.param("categoryId", getCategoryById);
// Routes
// Create
router.post("/category/create", createCategory);

module.exports = router;

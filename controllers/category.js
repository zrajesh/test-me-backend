// Imports
const Category = require("../models/category");

exports.getCategoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        req.category = category;
        next();
    })
}
// Create category
exports.createCategory = (req, res) => {
    const category = new Category(req.body)
    category.save((err, category) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json({category})
    })
}

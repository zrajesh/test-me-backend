// Imports
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
// Import routes

// Calling express method
const app = express();

// Port
const PORT = process.env.PORT || 5000;

// DB connection
mongoose.connect(process.env.DB)
    .then(() => console.log("DB CONNECTED"))
    .catch(err => console.log("DB CONNECTION ERROR: ", err))

// Middlewares
app.use(express.json());
app.use(cors());
// Routes
// Listening to port
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});

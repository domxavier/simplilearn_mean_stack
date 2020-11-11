// Load all modules
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = 9090;

// Database URL Details
var url = "mongodb://localhost:27017/mydb";

// Creating reference of express
var app = express();

// Middleware modules setup
app.use(bodyParser.json()); //converting JSON data
app.use(bodyParser.urlencoded({extended:true}));    // Enable post, put and delete body data

// Database connection with avoid warning properties
mongoose.connect(url,{useNewUrlParser:true,userUnifiedTopology:true}); // Reference is ready to connect

// Connect to DB
mongoose.connection; 






// Coding
var Product = require("./router/product.router.js");

// Middleware
// product here is for the root path
app.use("/product", Product);       // http://localhost:9090/product











app.listen(port, () => console.log(`Server listening on port ${port}`));

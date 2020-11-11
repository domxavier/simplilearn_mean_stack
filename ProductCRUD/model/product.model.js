// Load all modules
var mongoose = require("mongoose");
mongoose.pluralize(null);       // avoid post fix for collection
var ProductSchema = mongoose.Schema;

var ProductSchemaRef = new ProductSchema({
    _id : Number,
    pname : String,
    price : Number
});

// Map this Schema to Model
var ProductModel = mongoose.model("Product", ProductSchemaRef);

module.exports = ProductModel; // this reference can now be used in controller, otherwise it will remain local

// Model nad Schema details are here
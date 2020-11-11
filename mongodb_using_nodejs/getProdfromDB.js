var express = require("express");
var app = express();
var port = 9090;
var mongoose = require("mongoose"); // Load the module
var uri = "mongodb://localhost:27017/mydb"; // URL
mongoose.connect(uri,{useNewUrlParser:true}); // Reference is ready to connect
var db = mongoose.connection;   // Connected to db
mongoose.Promise = global.Promise;
db.on("error",(err) => console.log("Error generated..........."));  // Handling Error

var productinfo = [
    {pid:100, pname:"TV", price:95000},
    {pid:101, pname:"TV1", price:9500},
    {pid:102, pname:"TV2", price:950},
    {pid:103, pname:"TV3", price:95},
]
app.get("/products", (req, res) => {
    res.json(productinfo);      // helps to product JSON data
})

app.get("/productsdb", (req,res) => {
    var productSchema = mongoose.Schema({
        _id : Number,
        pname : String,
        price : Number
    })

    // Map this Schema to Model
    var Product = mongoose.model("products", productSchema);

    // Retrieve data
    Product.find({}, (err, result) => {
        if(err) {
            console.log("Error " + err);
        } else {
            res.json(result);
        }
        db.close();
    })

})













app.listen(port, () => console.log(`Server listening on port ${port}`));













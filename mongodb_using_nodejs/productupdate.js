var mongoose = require("mongoose"); // Load the module
var uri = "mongodb://localhost:27017/mydb"; // URL
mongoose.connect(uri,{useNewUrlParser:true}); // Reference is ready to connect
var db = mongoose.connection;   // Connected to db

mongoose.Promise = global.Promise;

db.on("error",(err) => console.log("Error generated..........."));  // Handling Error

db.once("open", function() {
    console.log("connected to.........")

    // Define Schema for collection
    var productSchema = mongoose.Schema({
        _id : Number,
        pname : String,
        price : Number
    })

    // Map this Schema to Model
    var Product = mongoose.model("Product", productSchema);

    Product.updateOne({_id:101},{$set:{price:55000}}, (err, result) => {
        if(err) {
            console.log("Error " + err);
        } else {
            console.log("Updated Successfully " + result.nModified);
            if(result.nModified == 0) {
                console.log("Nothing modified");
            } else {
                console.log("Records modified - " + result.nModified);
            }
        } 
        db.close();
    })
    

});

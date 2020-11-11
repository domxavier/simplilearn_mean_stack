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

    // Create product docuemnt instance or reference
    var p1 = new Product({_id:101, pname:"TV", price:100000});

    //Ready to save the record in mongodb
    p1.save((err, result) => {
        if (err) {
            console.log("Error - " + err);
        } else {
            console.log("Record inserted");
        }
        db.close();
    })

});

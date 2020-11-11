var MongoClient = require("mongodb").MongoClient;
// Load mongodb module as well as crated the refernece of that module
var uri = "mongodb://localhost:27017/mydb"
//mongodb://serverip:port/databasename

MongoClient.connect(uri, (err,db) => {
    if(err) {
        console.log("Error generated...")
    } else {
        console.log("database connected successfully...")
        // THE following cmmand does not work with the latest version of mongodb, needed an older version
        // db.collection("Employee").insertOne({_id:100, name:"Ramesh",age:35}, (err,res) => {
        //     if(err) {
        //         console.log("Error " + err);
        //     } else {
        //         console.log("Record inserted successfully!");
        //     }
        // })
    }
    db.close();     // close connection
})
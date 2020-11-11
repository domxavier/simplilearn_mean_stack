// the actual operation takes place here

var ProductModel = require("../model/product.model.js");

var GetProductFromDb = (req, res) => {
    ProductModel.find({}, (err, data) => {
        if(err) throw err;
        res.json(data);
    })
}

var GetProductById = (req, res) => {
    // Dynamically fetch the id needed from URL
    var idinfo = req.params.id;
    ProductModel.find({_id:idinfo}, (err,data) => {
        if(err) throw err;
        res.json(data);
    })
}

var StoreProductInfo = (req, res) => {
    let product = new ProductModel({    // when passing data we need to make sure its JSON data
        _id : req.body.pid,             // {pid : 103, pname : Monitor, price : 200}
        pname : req.body.pname,
        price : req.body.price
    });
    product.save((err,result) => {
        if(err) throw err;
        res.send("Record stored successfully in DB " + result);
    })
}

var UpdateProductInfo = (req,res) => {      // {pid : 100, pname:"TV" price : 450}
    let updateID = req.body.pid;
    let updatePrice = req.body.price;
    let updatePname = req.body.pname;
    ProductModel.updateOne({_id:updateID},{$set:{price:updatePrice,pname:updatePname}}, (err, result) => {
        if(err) throw err;
        res.send("Updated Successfully " + result.nModified);
        if(result.nModified == 0) {
            res.send("Nothing modified");
        } else {
            res.send("Records modified - " + result.nModified);
        }
    })
}

var DeleteProduct = (req,res) => {
    let deleteID = req.params.pid;
    ProductModel.deleteOne({_id:deleteID}, (err,result) => {
        if(err) throw err;
        if(result.deletedCount > 0) {
            res.send("Deleted  Successfully - " + result.deletedCount);
        } else {
            res.send("No mathcing Records")
        }
    })
}

// export the function to router
module.exports = {
                GetProductFromDb, 
                GetProductById,
                StoreProductInfo,
                UpdateProductInfo,
                DeleteProduct
            };      


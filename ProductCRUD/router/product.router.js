// Router linkes everything with a url

var express = require("express");
var router = express.Router();

var ProductController = require("../controller/product.controller.js");

router.get("/productfromdb", ProductController.GetProductFromDb);       // http://localhost:9090/product/productfromdb
router.get("/productinfobyid/:id", ProductController.GetProductById);   // http://localhost:9090/product/productinfobyid
router.post("/storeproduct", ProductController.StoreProductInfo);       // http://localhost:9090/product/storeproduct
router.put("/updateproductinfo", ProductController.UpdateProductInfo);  // http://localhost:9090/product/updateproductinfo
router.delete("/deleteproduct/:pid", ProductController.DeleteProduct);       // http://localhost:9090/product/deleteproduct/

module.exports = router;
















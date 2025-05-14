const express=require("express")
const {gerProductsController} =require("../controllers/getProductsController")
const { postProductsController } = require("../controllers/postProductsController")
//exports.productRouter=express.Router()
const productRouter=express.Router()
productRouter.get("/",gerProductsController)
productRouter.post("/",postProductsController)
module.exports={
    productRouter
}
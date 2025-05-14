const express=require("express")
const {postProductsController} =require("../controllers/postProductsController")
//exports.productRouter=express.Router()
const productRouter=express.Router()
productRouter.get("/",postProductsControllerProductsController)
module.exports={
    postproductRouter
}
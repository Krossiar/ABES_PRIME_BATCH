const { productModel } = require("../../../../models/product-schema")

const gerProductsController=async(req,res)=>{
    const productList=await productModel.find()
    res.send({
        status:"Success",
        data:{
            products:[],
        },
    })
}
module.exports={
    gerProductsController,
}
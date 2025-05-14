const {productModel}=require("../../../../models/product-schema")
const postProductsController=async(req,res)=>{
    const newProduct=await productModel.create({
        title: "Parle-G",
        price: "10",
    })
    res.status(201)
    res.json({
        status:"Success",
        data:{
            products:[],
        },
    })
}
module.exports={
    postProductsController,
}
require("./src/config/db")
const express=require("express")
const morgan=require("morgan")
const {productRouter}=require("./src/api/v1/products/routes/product-routes")
const app=express()
const PORT=2200
app.use(morgan("dev"))
app.use("/api/v1/products",productRouter)
app.listen(PORT,()=>{
    console.log(`-------------- App is running on PORT =${PORT}`)
})
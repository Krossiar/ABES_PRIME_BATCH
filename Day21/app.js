require('dotenv').config()
require("./src/config/db")
const express=require("express")
const morgan=require("morgan")
const {productRouter}=require("./src/api/v1/products/routes/product-routes.js")
const app=express()
app.use(express.json())
console.log(process.env)
const PORT=2200
app.use(morgan("dev"))
app.use("/api/v1/products",productRouter)
app.listen(PORT,()=>{
    console.log(`-------------- App is running on PORT =${PORT}`)
})
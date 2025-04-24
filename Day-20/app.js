const requestLog=require("./utils/logger").requestLog
const fsPromises=require('fs/promises')
const saveProductInDB=require("./database/db").saveProductInDB
const express=require("express")
const port=2100;
const app=express();
app.use(express.json())
app.use((req,res,next)=>{
    requestLog(req)
    next();
})
app.get("/",(req,res)=>{
    res.json({
        status:"success",
        message: `Server is running at ${port}`
    });
})

//Create a route for creating products
// Add th logic to store product in file

app.post("/products",async (req,res)=>{
    const data=req.body;
    /*if(data){
        fsPromises.appendFile('data.json',JSON.stringify(data));
        res.json({
            status:"Success",
            message:"Done dona done"
        })
    }
    else{
        res.json({
            status:"fail",
            message:"You are trying to access a route which is not defined yet"
        })
    }*/
   try{
    saveProductInDB(data)
    res.json({
        status:"Success",
        message:"Done dona done"
    })
   }
   catch(err){
    console.log(err.message)
    res.status(500)
    res.json({
        status:"fail",
        message:"You are trying to access a route which is not defined yet"
    })
}
   
})
app.use((req,res,next)=>{
    res.status(404)
    res.json({
        status:"fail",
        message:"You are trying to access a route which is not defined yet"
    })
})
app.listen(port,()=>{
    console.log(`App is running on port: ${port}`)
})
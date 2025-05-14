const mongoose=require("mongoose")

// const fs=require("fs")
// const data=fs.readFileSync(".env","utf-8")
// console.log("Data:",data)
mongoose.connect(process.env.MONGO_DB_URL,{
    dbName: "PRIME-ABES-22"
}).then(()=>{
    console.log("----------DB Connection Connected---------=")
}).catch((err)=>{
    console.log("------DB Connection Error------")
    console.log(err.message)
    console.log("-----------------")
})

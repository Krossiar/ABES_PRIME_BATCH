const mongoose=require("mongoose")
mongoose.connect(
    "mongodb+srv://vipinch211:Rohit%40332211@cluster0.ygmbpau.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then(()=>{
    console.log("----------DB Connection Connected---------=")
}).catch((err)=>{
    console.log("------DB Connection Error------")
    console.log(err.message)
    console.log("-----------------")
})

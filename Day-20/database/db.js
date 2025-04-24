const {ulid}=require("ulid")
const fsPromises=require("fs/promises")
const saveProductInDB=async(obj)=>{
    obj.id=ulid()
    const oldarray=await getProductsArray()
    oldarray.push(JSON.stringify(obj))
    saveProductsArray(oldarray)
}
const saveProductsArray=(arr)=>{
    fsPromises.writeFile("./data.json",JSON.stringify(arr))
}
const getProductsArray=async()=>{
    const str=await fsPromises.readFile("./data.json")
    const arr=JSON.parse(str)
    return arr
}
module.exports={
    saveProductInDB,
}
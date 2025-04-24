const fsPromises=require('fs/promises')
const saveLogs=(str)=>{
    fsPromises.appendFile(
        "log.text",str
    )
}
const requestLog=(req)=>{
    const {method,url}=req;
    const date=new Date();
    saveLogs(`${date.toLocaleString()}-${method}-${url}`)
}
module.exports={
    requestLog,
}
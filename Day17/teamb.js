const sum=(...args)=>{
    const ans=args.reduce((acc,elem)=>{
        return acc+elem
    },0)
    return ans
}
module.exports=sum
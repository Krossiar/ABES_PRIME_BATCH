const arr=["Delhi","Fruits"]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

for(let i in arr){
    console.log(i)
}
for(let i of arr){
    console.log("of "+i)
}
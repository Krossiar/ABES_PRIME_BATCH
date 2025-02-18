/*print("vipin")
function print(a){
    console.log("Hello",a)
}
function print(a){
    console.log("hello",a)
}
function print(a){
    console.log("Hi",a)
}*/
//Function Assignment and anonymous function 
const v=function print(a){
    console.log("hello",a)
}
v("Vip")
print("Gogi")

//Arrow Function
const vb=(a)=>{
    console.log("hello",a)
};
vb("Vip")
function sumMod10(a,b){
    return (a+b)%10;
}
const ans=sumMod10(20,32);
console.log(ans)
const b=function sumMod10(a,b){
    return (a+b)%10;
}
const d=(a,b)=>{
    (a+b)%10;
}
c=b(20,3)
console.log(c)
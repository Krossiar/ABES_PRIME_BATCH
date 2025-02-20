/*console.dir(document);
console.dir(document.children[0])
console.log(document.children[0].children[1])
document.children[0].children[1].children[0].style.color="Red"
/*document.children[0].children[1].children[1].style.color="Blue"
document.children[0].children[1].children[1].children.style.color="Yellow"
const outerDiv=document.querySelector("div")
outerDiv.style.backgroundColor="blue"
//Inner div color yellow
const divChildren=Array.from(outerDiv.children)
console.log("DivChildren:", divChildren);
divChildren.forEach((element) => {
    element.style.backgroundColor="Yellow"
});
const mappings={
    Invitation:"You are invited for event",
    Reminder:"You are related for task",
    Notice:"You have a notice from college",
    Message:"You have 7 messages",
}
const map=Object.values(mappings);
const p=document.querySelectorAll("p")
console.log(p);
let i=0;
p.forEach((element) => {
    element.innerHTML=map[i]
    i+=1
});*/
const mappings={
    Invitation:"You are invited for event",
    Reminder:"You are related for task",
    Notice:"You have a notice from college",
    Message:"You have 7 messages",
}
const newElement=document.createElement("div")
const rootElement=document.querySelector("body")
newElement.innerHTML="Hi from DOM"
rootElement.appendChild(newElement)
Object.entries(mappings).forEach((ele)=>{
    const newchildDiv=document.createElement('div')
    //newchildDiv.innerHTML="Hello!"
    newchildDiv.style.border="1px solid blue"
    newchildDiv.innerHTML=`
    <h4 style="color:orange">${ele[0]}</h4>
    <p>${ele[1]}</p>
    `
    newElement.appendChild(newchildDiv)

})




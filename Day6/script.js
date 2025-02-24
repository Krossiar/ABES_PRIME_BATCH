const data=[
    {name: "Vipin" ,role:"IGL",email:"vipin21@gmail.com"},
    {name: "Gogi" ,role:"Rusher",email:"gogi21@gmail.com"},
    {name: "Vipul" ,role:"Bot",email:"vipul21@gmail.com"},
    {name: "Shubham" ,role:"Healer",email:"shubh21@gmail.com"}
]
const root=document.getElementById("parent")
data.forEach((ele)=>{
    const newCard=document.createElement("div")
    newCard.addEventListener("click",()=>{
        newCard.style.backgroundColor=getRandomColor();
        console.log("div clicked");
    },true)
    //setattribute
    //classlist
    newCard.className="card"

    newCard.innerHTML=`
        <h4>${ele.name}</h4>
        <h6>${ele.role}</h6>
        <P class="text">${ele.email}</p>
    `;
    root.appendChild(newCard)
})
const handleBgChange=()=>{
    console.log("a");
    const bodyele=document.querySelector("body")
    bodyele.style.backgroundColor=getRandomColor();
}
const getRandomColor=()=>{
    const randomRed=Math.floor(Math.random()*255);
    const randomGreen=Math.floor(Math.random()*255);
    const randomBlue=Math.floor(Math.random()*255);
    return `rgb(${randomRed},${randomGreen},${randomBlue})`

}
const textElement=document.querySelector(".text");
textElement.addEventListener("click",()=>{
    console.log("Para Clicked",event);
    event.stopPropagation()
    textElement.style.backgroundColor=getRandomColor();
})
const data=[
    {name: "Vipin" ,city:"Hapur",email:"vipin21@gmail.com"},
    {name: "Gogi" ,city:"Ghaziabad",email:"gogi21@gmail.com"},
    {name: "Vipul" ,city:"G Noida",email:"vipul21@gmail.com"},
    {name: "Shubham" ,city:"Hapur",email:"shubh21@gmail.com"}
]
const root=document.getElementById("parent")
data.forEach((ele)=>{
    const newCard=document.createElement("div")
    //setattribute
    //classlist
    newCard.className="card"

    newCard.innerHTML=`
        <h4>${ele.name}</h4>
        <h6>${ele.city}</h6>
        <P>${ele.email}</p>
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
const data=[
    {id: "abcd1" ,name:"Vipin",city:"Mumbai"},
    {id: "ab" ,name:"Pulpul",city:"Greater Noida"},
    {id: "abc" ,name:"Gogi",city:"Noida"},
    {id: "abcd" ,name:"preet",city:"Delhi"},
]
const check=document.getElementById("a1")
console.log(check.value);
const r1=document.getElementById("card")
const showCards=(arr)=>{
    r1.innerHTML=""
    arr.forEach((elem,idx)=>{
        const card=document.createElement("div")
        card.className="card"
        card.innerHTML=`
            <h4>${elem.name}</h4>
            <p>${elem.city}</p>
            <button onClick="deleteCard(event,'${elem.id}')">Delete</button>
        `
        r1.appendChild(card)
    })
}
const deleteCard=(e,elemId)=>{
    //e.target.remove();
    //e.target.parentElement.remove()
    const index=data.findIndex((elem)=>elem.id==elemId)
    data.splice(index,1)
    showCards(data)
}

const handleSelect=(e)=>{
    const selectedcity=e.target.value;
    const newData=data.filter((elem)=>{
        if(elem.city===selectedcity){
            return true
        }
        return false
    })
    showCards(newData)
}
showCards(data)

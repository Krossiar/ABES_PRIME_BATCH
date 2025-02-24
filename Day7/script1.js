const data=[
    {email: "abcd1@gmail.com" ,name:"Vipin",city:"Mumbai"},
    {email: "ab@gmail.com" ,name:"Pulpul",city:"Greater Noida"},
    {email: "abc@gmail.com" ,name:"Gogi",city:"Noida"},
    {email: "abcd@gmail.com" ,name:"preet",city:"Delhi"},
]
const r1=document.getElementById("card")
const selectElement=document.getElementsByTagName("select")[0]
const showOptions=()=>{
    selectElement.innerHTML=""
    const citiesObj={}
    data.forEach((elem)=>(citiesObj[elem.city]=true))
    const cities=Object.keys(citiesObj)
    cities.forEach((city)=>{
        const newOption=document.createElement("option")
        newOption.value=city
        newOption.innerHTML=city
        selectElement.appendChild(newOption)
    })
}
const showCards=(arr)=>{
    showOptions()
    r1.innerHTML=""
    arr.forEach((elem,idx)=>{
        const card=document.createElement("div")
        card.className="card"
        card.innerHTML=`
            <h5>${elem.email}</h5>
            <h4>${elem.name}</h4>
            <p>${elem.city}</p>
            <button onClick="deleteCard(event,'${elem.email}')">Delete</button>
        `
        r1.appendChild(card)
    })
}
const deleteCard=(e,elemId)=>{
    //e.target.remove();
    //e.target.parentElement.remove()
    const index=data.findIndex((elem)=>elem.email==elemId)
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
const handleFormSubmit=(e)=>{
    e.preventDefault()
    /*console.log(e.target.email.value)
    console.log(e.target[0].value);
    console.log(e.target.fullName.value)
    console.log(e.target[1].value);
    console.log(e.target.city.value)
    console.log(e.target[2].value);*/
    // add the value
    const isEmailExists=data.some((elem)=>{
        return elem.email===e.target.email.value
    })
    if(isEmailExists){
        alert("Email Already Used")
        return 
    }
    const newElem={
        name: e.target.name.value,
        email: e.target.email.value,
        city: e.target.city.value,
    }
    data.push(newElem)
    showCards(data)
}
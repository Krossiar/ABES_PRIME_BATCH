//https://dummyjson.com/recipes
const getData=(text)=>{
    const pr=fetch(`https://dummyjson.com/recipes/search?q=${text}`)
    pr.then((res)=>{
        const pr2=res.json();
        pr2.then((data)=>{
            showCards(data.recipes);
        })
    })
}
const root=document.getElementById("cards-container")
const showCards=(dataArr)=>{
    dataArr.forEach((elem) => {
        const newdiv=document.createElement('div')
        newdiv.className="card"
        newdiv.innerHTML=`
            <h4>${elem.name}</h4>
            <img src="${elem.image}" width="100px">
            <p>${elem.cuisine}</p>
        `
        root.appendChild(newdiv)
    });
};
let timeoutId=null;
const handleSearch=(e)=>{
    if(timeoutId){
        clearTimeout(timeoutId)
    }
    timeoutId=setTimeout(()=>{
        getData(e.target.value)
    },1000);   
}
const http=require("http")
const port=1200
const fspromises=require("fs/promises")

const getData = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    
    return data.products;
}

const getProductsHTMLCode = (products) => {
    let result = "";
    products.forEach(({title, price}) => {
        result += `
            <div class="card">
                <h2>${title}</h2>
                <p>Price: ${price}</p>
            </div>
        `;
    });
    return result;
}

const server=http.createServer(async(req,res)=>{
    console.log("-------request received--------")
    res.setHeader("content-type","text/html")

    const resp=await fspromises.readFile("./pages/homePage.html", {
        encoding:"utf-8"
    })

    const products=await getData();
    const productsHTMLCode = getProductsHTMLCode(products);
    console.log("products code: ", productsHTMLCode)
    const newPage=resp.replace("__PRODUCTS__", productsHTMLCode)
    res.end(newPage);
});
server.listen(port,()=>{
    console.log(`Server is running at ${port}`)
    console.log(`http://localhost:${port}`)
});
import React, { useEffect, useState } from 'react'
import Card from './Components/Card'

const App = () => {
  //const getData=()=>{
//     const pr1=fetch("https://dummyjson.com/products")
//     pr1.then((res)=>{
//       console.log("Res:",res)
//       return res
//     }).catch((err)=>{
//       console.log("Error occured :",err)
//     })
//     .then((data)=>{
//       console.log("Data",data)
//     })
//   }
  //StrictMode leads two double render
  //const getData=()=>{
  // const pr1=fetch("https://dummyjson.com/products")
  // pr1.then((res)=>res.json())
  // .catch((err)=>{
  //   console.log("err",err)
  // }).then((data)=>{
  //   console.log("Data",data)
  // })
  const [a,b]=useState("")
  const [currpg,setCurrPage]=useState(0)
  const getData=async()=>{
    try{
      const response=await fetch(`https://dummyjson.com/products?limit=10&skip=${10*(currpg)}`)
      const data=await response.json()
      console.log("Data:",data)
      b(data)
      console.log(b)
    }
    catch(err){
      console.log("Error",err.message)
    }
    finally{
      console.log("Completed Successfully")
    }
  }
  //getData()
  useEffect(()=>{
    getData()
    //array(absent)- don't make much differeence
    //array(empty)= it only run side effect once
    //array(few data)
  },[currpg])
  const totalPages=Math.ceil(a.total/a.limit)
  const pages=[]
  for(let i=0;i<totalPages;i++){
    pages.push(i+1);
  }

  return (
    <div>
      <select
        onChange={(e)=>{
          setCurrPage(e.target.value)

        }}>
        {pages.map((pageNumber)=>{
          return <option>{pageNumber}</option>
        })}
      </select>
      {/*Optional chaining*/}
      {/*Conditional rendering*/}
      {/*nullish coalescing*/}
      {a.products?.map((ele)=>{
        return <Card title={ele.title} price={ele.price} thumbnail={ele.thumbnail}></Card>
      })}
    </div>
  )
}

export default App


import React from 'react'
import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router'
/*const App=() =>{
  const [monitor,remote]=useState("Mohan");
  console.log("re-rendered",monitor)
  const handleChange=(e)=>{
    //console.log(e.target.value)
    setTimeout(()=>{
      console.log(e)
      if(e.nativeEvent.inputType==="deleteContentBackward")
      {
        remote(e.target.value.substring(0,e.target.value.length-1))
      }
      else{
        remote(e.target.value + e.nativeEvent.data)
      }
    },2000)
    
    console.log("Upgraded",monitor)
  }
  const handleReset=()=>{

  }
  const handleSubmit=()=>{

  }
  return (
    <div>
      <p>Name</p>
      <input value={monitor} placeholder='Please enter here....' onChange={handleChange} />
      <input type="email" placeholder='Enter Email'/>
      <input type="number" placeholder='Enter Phone Number'/>
      <button onClick={handleSubmit}>On Submit</button>
      <button onclick={handleReset}>Reset</button>
      <h3>Hello {monitor} !</h3>
    </div>
  )
}
export default App;*/
/*const App = () => {
  const [flag,setFlag]=useState(true);
  const handleClick=()=>{
    setFlag(false);
  }
  if(flag===true){
    return (
      <section>
        <div style={{display:"flex"}}>Hello</div>
        <button onClick={handleClick}>Submit</button>
      </section>
    )
  }
  else{
    return (
      <section>
        <div style={{display:"flex"}}>Hi</div>
      </section>
    )
  }
}
export default App;*/

const App = () => {
  const [flag,setFlag]=useState(true);
  const handleChange=()=>{
    setFlag(false);
  }
    return (
      <section>
        {flag===true?
            
        <div style={{display:"flex"}}>Hello</div>
  :   
        <div style={{display:"flex"}}>Hi</div>
        }
    </section>
    )
}
export default App;
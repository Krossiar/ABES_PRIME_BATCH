//UseState- When there is one state that changes many time then the component should be re-render 
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name,setName]=useState("Vipin");
  const [email,setEmail]=useState("");
  const [isSubmitted,setIsSubmitted]=useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(e.target.userName.value.length<2){
      alert("Invalid Name")
    }
    else{
      setName(e.target.userName.value);
    setEmail(e.target.userEmail.value)
    setIsSubmitted(true);
    }
    console.log(e)
  }

  return (
    <div>
      {
        isSubmitted==true ?
        <section>
        <h2>Name {name}</h2>
        <h4>Email {email}</h4>
        </section> :
        <form onSubmit={handleSubmit}>
        
        <div>
          <label >Name</label>
          <input name="userName" placeholder='Type here ....'/>
        </div>  
        <div>
          <label htmlFor="">Email</label>
          <input name="userEmail" placeholder='Type here....'/>
        </div>
        <button >Submit</button>
        </form>
      }
    </div>
  )
}
// //UseState- When there is one state that changes many time then the component should be re-render 
// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [name,setName]=useState("Vipin");
//   const [email,setEmail]=useState("");
//   const [isSubmitted,setIsSubmitted]=useState(false);
//   const handleSubmit=()=>{
//     if(name.length<2){
//       alert("Invalid Name")
//     }
//     else{
//       setIsSubmitted(true);
//     }
//   }

//   return (
//     <div>
//       {
//         isSubmitted==true ?
//         <section>
//         <h2>Name ${name}</h2>
//         <h4>Email ${email}</h4>
//         </section> :
//         <form>
        
//         <div>
//           <label >Name</label>
//           <input value={name} onChange={(e)=>{
//             setName(e.target.value)
//           }} placeholder='Type here ....'/>
//         </div>  
//         <div>
//           <label htmlFor="">Email</label>
//           <input value={email} onChange={(e)=>{
//             setEmail(e.target.value)
//           }}  placeholder='Type here....'/>
//         </div>
//         <button onClick={handleSubmit}>Submit</button>
//         </form>
//       }
//     </div>
//   )
// }

// export default App
export default App


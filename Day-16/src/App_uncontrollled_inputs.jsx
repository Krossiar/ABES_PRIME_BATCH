//UseState- When there is one state that changes many time then the component should be re-render 
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [userDetails,setUserDetails]=useState({
    name:"VIpin",
    email:"fw",
    phoneNumber:"12343",
  });
  const [isSubmitted,setIsSubmitted]=useState(false);
  const handleSubmit=()=>{
    if(userDetails.name.length<2){
        alert("Invalid User")
    }
    else{
        setIsSubmitted(true)
    }
  }

  return (
    <div>
      {
        isSubmitted==true ?
        <section>
            {Object.entries(userDetails).map(([key,val],idx)=>{
                return(
                    <h3 key={key}>
                        {idx}.{key}::{val}
                    </h3>
                )
            })}
        </section> :
        <section>
        
        <div>
          <label >Name</label>
          <input name="userName" value={userDetails.name}  placeholder='Type here ....' onChange={(e)=>{
            const val=e.target.value;
            const newItem=userDetails;
            newItem.name=val;
            setUserDetails({...newItem})

          }}/>
        </div>  
        <div>
          <label htmlFor="">Email</label>
          <input name="userEmail" value={userDetails.email} placeholder='Type here....' onChange={(e)=>{
            const val=e.target.value;
            const newItem=userDetails;
            newItem.name=val;
            setUserDetails({...newItem})
          }}/>
        </div>
        <div>
          <label htmlFor="">Phone Number</label>
          <input name="phoneNumber" value={userDetails.phoneNumber} onChange={(e)=>{
            const val=e.target.value;
            const newItem=userDetails;
            newItem.name=val;
            setUserDetails({...newItem})
          }} placeholder='Type here....'/>
        </div>
        <button onClick={handleSubmit}>Submit</button>
        </section>
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


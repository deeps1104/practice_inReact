import React, { useState } from 'react'
import './Form.css'
const Form = () => {

const [name ,setName] = useState("")
const [contact,setContact] = useState([])
const [email1,setEmail] = useState()
const [pswd ,setPswd] = useState("")
const [confirmpswd ,setConfirmpswd] = useState("")

const inputEvent = (e) => {
  setName(e.target.value)

 }
 const inputEvent1 =(e)=>{
  setContact(e.target.value)
} 

 const inputEvent2 = (e) => {
  setEmail(e.target.value)
 
 }

const inputEvent3 =(e)=> {
  setPswd(e.target.value)
}

const inputEvent4 =(e)=> {
  setConfirmpswd(e.target.value)
}



  




const SubmitForm = (e) => {

  if(name == ""){
    document.getElementById("data1").style.display="block"
  }
  
  else if((contact) || contact < 1 || contact > 10){
    document.getElementById("data2").style.display="block"
   }
   
   else if(email1.includes("@")){
     document.getElementById("data3").style.display="block"
    }
    
    else if(pswd === ""){
    document.getElementById("data4").style.display="block"
  }
 
  else if(pswd === confirmpswd){
    document.getElementById("data4").style.display="block"

  }
   
}
  return (
    <div className='login-form'>
      <div className='form1'>
        <div style={{width:"100%",marginBottom:"10px",alignItems:"center"}}>
        <h1 className='main'>Form</h1>
      <hr />
        <div>
          <form className='login-field'>
            <input type="text" placeholder='FullName' className='px-3 my-2' value={name}   onChange={inputEvent} /><br />
            <p id='data1' style={{display:"none"}}>Please fill Username</p>

            <input type="number" placeholder='MobileNo.' className='px-3 my-2'onChange={inputEvent1} value={contact} /><br />
            <p id='data2' style={{display:"none"}}>Please fill 10  digits Number</p>

            <input type="email" placeholder=' Email' className='px-3 my-2' value={email1} onChange={inputEvent2}/><br />
            <p id='data3'style={{display:"none"}}>Please fill email address</p>

            <input type="password" placeholder='Password' className='px-3 my-2' onChange={inputEvent3} value={pswd} /><br />
            <p id='data4'style={{display:"none"}} >password is must</p>

            <input type="new-password" placeholder='Confirm Password' className='px-3 my-2'   onChange={inputEvent4}  value={confirmpswd}/>
            {/* <p id='data5' style={{display:"none"}} >Confirm password ?</p> */}
          </form>
          </div>
          <div className='pt-3'>
            <button  type='button' onClick={SubmitForm}>Login</button>
          </div>
    </div>
    </div>
    </div> 

  )
}

export default Form

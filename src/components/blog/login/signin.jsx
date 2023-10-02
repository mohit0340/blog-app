import React, { useContext, useState } from 'react'
import signinimg from "../../../assets/signin.svg"
import { manageuser } from '../Logincontext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Signin = () => {
  const[user,setUser]=useContext(manageuser)
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [userdata,setUserdata]=useState(JSON.parse(sessionStorage.getItem("data")))
 


  const handlesignin=()=>{
    if(email==""||password==""){
      toast.error("Please Enter Data in All Field")
    }
    else{
      if(email!=userdata.email || password!=userdata.password){
      toast.error("Please Enter Valid Email or Password")

      }
      else{
       return(
        toast.success("You are successfully logged in"),
        setUser(userdata),
        navigate("/user"))
      }
    }

  }
  
  return (
    <div className='container bg-body-secondary mt-2 rounded p-4 ps-5 pe-5 '>
      <div className="row bg-warning-subtle rounded-2">
      
        <img src={signinimg} className='col-6  '></img>
      <div className='col-6 d-flex flex-column gap-4 p-2 p-5 mt-5' >
        <h2 >Sign in</h2>
        <input type='text' onChange={(e)=>setEmail(e.target.value)} className=' bg-primary-subtle border-1 border-dark rounded-2 p-2 mt-3' placeholder='Enter Your Email'></input>
        <input type='password' onChange={(e)=>setPassword(e.target.value)} className=' bg-primary-subtle border-1 border-dark rounded-2 p-2' placeholder='Enter Your Password'></input>
       
<button className='btn btn-outline-primary' onClick={handlesignin}>Sign in</button>

      </div>
      </div>
    </div>
  )
}

export default Signin

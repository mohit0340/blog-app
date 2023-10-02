import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addblog } from '../../services/Blog-slice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'




const Addblog = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [content,setContent]=useState("")
    const[blogtype,setBlogtype]=useState("")
    const date1=new Date()
const date=(date1.toJSON()).slice(0, 10)

    const handlepublish=()=>{
        console.log(name,content,blogtype)
        if(name=="" || content=="" || blogtype==""){
            toast.error("Please Add all Blog Details")
          

        }
        else{
            toast.success("you Successfully Added New blog")
            dispatch(addblog({type:blogtype,title:name,date:date,content:content,comments:[]}))
            navigate("/home")
        }
        
    }

    
  return (
    <div className='container w-100 bg-body-secondary mt-2 rounded p-3 mb-5'>
        <div className='w-100 bg-body-tertiary rounded '>
            <div className='d-flex justify-content-around align-items-center'>
            <label htmlFor='name'className=' text-start m-3 fs-4' >Blog name</label>
        <input type='text' id='name' className='w-75 h-75 p-1 ps-2 pe-2 bg-primary-subtle border-1 rounded-2 text-capitalize border-dark  ' placeholder='Enter Your Blog-Name' onChange={(e)=>setName(e.target.value)}></input></div>
     
            <div className='d-flex justify-content-around align-items-center'>
            <label htmlFor='name'className=' text-start m-3 fs-4' >Blog Type</label>
        <input type='text' id='name' className='w-75 h-75 p-1 ps-2 pe-2 bg-primary-subtle border-1 rounded-2 text-capitalize border-dark' placeholder='Enter Your Blog-Type' onChange={(e)=>setBlogtype(e.target.value)}></input></div>
        <div className='d-flex justify-content-around align-items-center mt-3' >
        <label htmlFor='name'className=' text-start me-3 h-75 pe-4 p-3 ms-1 fs-4 m-2' >Content</label>
        <textarea type='text' id='name' className='w-75  me-1 p-1 ps-2 pe-2 bg-primary-subtle border-1 rounded-2 border-dark' placeholder='Add Your Blog'  style={{height:"150px"}} onChange={(e)=>setContent(e.target.value)}></textarea></div>
        <button className='btn btn-primary m-2 p-2 ps-2 fs-5 ' style={{width:"120px"}}onClick={handlepublish}>Publish</button>
        
        </div>

   </div>

  )
}

export default Addblog

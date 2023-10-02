import React, { useEffect, useState } from 'react'
import Userdata from "../../blogdata.json"
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { useSelector } from 'react-redux';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';


const Blogs = () => {
  const state=useSelector(state=>state.blog[0].blog_posts)
  const[userdata,setUserdata]=useState(Userdata)

  // console.log(state)
  const navigate=useNavigate()
  const comments=useParams()
  // console.log(comments.id,comments.type)

  

  const handleblogclick=(val)=>{
    navigate(`/blogpreview/${val}`)

  }
  
  return (
    <div className='bg-body-secondary pt-4 mt-2 rounded-2 '>
      <div className='d-flex justify-content-between mt-5 '>
      <h2 className='ms-4'>Blog Data</h2>
      <button className=' btn btn-outline-success d-flex justify-self-end align-items-center me-5' onClick={()=>navigate("/addblog")}><AddCircleOutlineRoundedIcon/> Add Blog</button>
      
      </div>
    <div className='d-flex flex-wrap row-cols-3 mt-5  p-3 justify-content-between'>
      {
        state.map((item,index)=>(
          <div key={index} onClick={()=>handleblogclick(index)} className=' d-flex flex-column justify-content-between text-center  mb-3 overflow-hidden rounded-3 p-3 bg-dark text-light' style={{height:"300px",width:"30%",border:"1px solid black"}}>
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <div className='w-100 p-4 border-1 border-black h-50 overflow-hidden bg-primary-subtle text-black text-center rounded mw-100'>{item.content}</div>
            <div className='d-flex position-relative' >
            <MessageOutlinedIcon></MessageOutlinedIcon>
            <p className=' bg-light text-black' style={{position:"absolute",top:"-0.5rem",left:"1rem",fontSize:"15px",padding:"0 2px 0 2px ",borderRadius:"50%"}}>{item.comments.length}</p>
            </div>


          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Blogs

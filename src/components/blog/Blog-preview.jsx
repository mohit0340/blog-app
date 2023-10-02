import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import userdata from "../../blogdata.json"
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { toast ,ToastContainer} from 'react-toastify';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { addcomment } from '../../services/Blog-slice';

const Blogpreview = () => {
  const params=useParams("")
  const state= useSelector(state=>(state.blog[0].blog_posts).filter((val)=>{
   return params.id.includes(val.title)
  }))
  console.log(state[0])
  // console.log(state)
  const navigate=useNavigate()
  const dispatch= useDispatch()
  const [email,setEmail]=useState("")
  // const [blogdata,setBlogdata]=useState(userdata);
  const [comment,setComment]=useState("")


  const handlecomment=()=>{

    if(email=="" || comment==""){
      toast.error("Please Enter Data in All Field")

    }
    else{
      if(email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        toast.success("You Are Successfully Commented on Blog ")
        dispatch(addcomment({id:params.id,data:{data:comment,username:email}}))

      }
      else{
      
        toast.error("Please Enter Valid Email")
      }

  
  
      
    }

    
  }


  return (
    <div className=' bg-dark-subtle rounded pt-2 mt-3 p-2'>
      {/* {
        state!=""?( */}
          <>
    
      <h2 className='pt-2'>Blog Preview</h2>
    <div className='mt-5 w-100 bg-black d-flex justify-content-between text-light rounded p-4 ' style={{height:"90px"}}>
      <p className=' fw-semibold fs-3 ' >{state[0].title}</p>
      <p className='pt-2'>Date : {state[0].date}</p>
    </div>
    <div className='mt-5 w-100 bg-black text-start text-light rounded p-3 mb-3'>
      <div className='fs-5' >{state[0].content}</div>
    </div>
    <div className='mt-5 w-100 bg-black d-flex gap-2 flex-column text-start text-light rounded p-3 mb-3' style={{height:"300px"}}>
      <h2>Add Comment</h2>
    <input type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email' className=' rounded w-100 h-50 bg-danger-subtle fs-5 border-1 p-2'></input>
<textarea className='w-100 h-100 bg-danger-subtle fs-5 border-1 p-1  rounded' onChange={(e)=>{setComment(e.target.value)}} placeholder="Add Your Comment...."></textarea>

<div className='d-flex justify-content-between'>
<button className='btn border-light btn-primary text-center  mt-3 ps-2 ' onClick={()=>navigate(`/home`)} style={{width:"100px"}}><KeyboardBackspaceOutlinedIcon/>  Back</button>

<button className='btn border-light btn-primary text-center mt-3  ps-3' onClick={handlecomment} style={{width:"100px"}}>Submit</button>
</div>

    </div>
    <div  className='mt-5 w-100 bg-black text-start text-light rounded p-3 mb-3'>
      <h2>Comments</h2>
    {state[0].comments!=undefined?<div className='d-flex flex-column gap-2'>
      {
        state[0].comments.map((item,index)=>(
          <div key={index}  className='width-100 rounded-2 p-2 height-25 bg-primary-subtle text-black'>
            <p className='fs-6 d-flex'><AccountCircleRoundedIcon></AccountCircleRoundedIcon>{item.username}</p>
          <p className='fs-5 ps-3'>{item.data}</p>
          </div>
        ))

        }</div>
   :null}
    </div>
    </>
{/*  */}
    

    </div>
    
  )
}

export default Blogpreview

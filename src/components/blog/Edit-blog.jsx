import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { editblog } from '../../services/Blog-slice'




const Editblog = () => {
  const params=useParams("")
  const navigate=useNavigate()
  const state=useSelector(state=>state.blog[0].blog_posts[params.id])
    const dispatch=useDispatch("")
    const [title,setTitle]=useState(state.title)
    const [content,setContent]=useState(state.content)
    const[blogtype,setBlogtype]=useState(state.type)
  

   

    const handleedit=()=>{
      console.log(title,content)
      if(title==""||content==""){
        toast.error("Please Enter Data in All Field")
        
      }
      toast.success("You Successfully updated Your Blog")
      dispatch(editblog({id:params.id,data:{type:blogtype,title:title,date:state.date,content:content,comments:state.comments}}))
      navigate("/home")
      

    }

  return (
    <div className=' bg-dark-subtle rounded pt-2 mt-3 p-2'>
      <h2>Edit Data</h2>
      <div className='d-flex justify-content-around align-items-center'>
            <label htmlFor='name'className=' text-start m-3 fs-4' >Blog name</label>
        <input type='text' id='name'  className='w-75 h-75 p-1 ps-2 pe-2 bg-primary-subtle border-1 rounded-2 text-capitalize border-dark  ' placeholder='Enter Your Blog-Name'  value={title}  onChange={(e)=>setTitle(e.target.value)}></input></div>
     
            <div className='d-flex justify-content-around align-items-center'>
            <label htmlFor='name'className=' text-start m-3 fs-4'  >Blog Type</label>
        <input type='text' id='name'  className='w-75 h-75 p-1 ps-2 pe-2 bg-primary-subtle border-1 rounded-2 text-capitalize border-dark' placeholder='Enter Your Blog-Type'  value={blogtype}  onChange={(e)=>setBlogtype(e.target.value)}></input></div>
        <div className='d-flex justify-content-around align-items-center mt-3' >
        <label htmlFor='name'className=' text-start me-3 h-75 pe-4 p-3 ms-1 fs-4 m-2' >Content</label>
        <textarea type='text' id='name'  className='w-75  me-1 p-1 ps-2 pe-2 bg-primary-subtle border-1 rounded-2 border-dark' placeholder='Add Your Blog' value={content}  style={{height:"150px"}} onChange={(e)=>setContent(e.target.value)}></textarea></div>
    <div>
      <button className='btn btn-primary m-2 p-2' style={{width:"90px"}}  onClick={handleedit}>Update</button>
    </div>
    </div>
  )
}

export default Editblog

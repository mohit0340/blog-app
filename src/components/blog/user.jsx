import React, { useContext } from 'react'
import Signin from './login/signin'
import { useNavigate } from 'react-router-dom'
import { manageuser } from './Logincontext'
import { removeblog } from '../../services/Blog-slice'
import { useDispatch, useSelector } from 'react-redux'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';




const User = () => {
  const[user,setUser]=useContext(manageuser)
  const data=useSelector(state=>state.blog[0].blog_posts)
  const navigate=useNavigate()
  const dispatch=useDispatch()

const handledelete=(val)=>{
  const message=window.confirm("Are you sure?")
  if(message==true){
    dispatch(removeblog(val))
  }


}
const handleedit=(val)=>{
  navigate(`/edit/${val}`)

}

  return (
  <div className='mt-2 bg-body-secondary rounded p-3'>
    {user==""?(
      <div className='m-5'>
      <h2>Please <button className='btn btn-outline-primary p-2 ps-3 pe-3' onClick={()=>navigate("/signin")}>Login</button> First </h2>
    </div>
    ):
    (
      <div className='mt-2 bg-body-secondary rounded p-3'>
        <h2 className='p-3'>Welcome {user.name}</h2>
        <div className=' text-start'>
          <div className='d-flex justify-content-between m-2'>
          <h3>Your blogs</h3>
          <h3>Total Blog : {data.length}</h3>
          </div>
          {
            data.map((item,index)=>(
              <div className=' bg-black d-flex align-items-center justify-content-between text-light m-1 p-2 rounded-2' key={index}>
                <p className='fs-5 pt-2'>{item.title}</p>
                <div className='d-flex gap-2'>
                <button className='btn btn-outline-warning d-flex gap-2 ps-2 pe-2' onClick={()=>handleedit(index)}>Edit<AutoFixHighIcon/> </button>
                <button className='btn btn-outline-danger d-flex gap-1 ps-2 pe-2' onClick={()=>handledelete(index)}>Delete<DeleteForeverRoundedIcon/></button>
                </div>

              </div>
            ))
          }
        </div>
      </div>
    )

    }
    </div>
    
  )
}

export default User

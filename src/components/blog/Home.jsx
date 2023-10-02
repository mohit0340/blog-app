import React, { useLayoutEffect,useEffect, useState } from 'react'
import { Link ,useNavigate,Outlet} from 'react-router-dom'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


const Home = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    navigate("/home")
    
  },[])


  return (
    <div className='container mt-2 text-center'>
      <nav className=' bg-primary-subtle w-100 rounded d-flex justify-content-around pt-3' style={{height:"55px"}}>
        <p>Blog-App</p>

        <div className='d-flex gap-5'>
      <Link to="/home" className='text-dark text-decoration-none'>Home</Link>
      <Link to="/user" className='text-dark text-decoration-none d-flex'><AccountCircleRoundedIcon/>User</Link>
      


      </div>
      </nav>
      <Outlet></Outlet>
       
      
    </div>
  )
}

export default Home


import React, { useContext, useEffect, useLayoutEffect } from 'react'
import { manageuser } from './Logincontext'
import { useNavigate } from 'react-router-dom'



const Protectrouter = (props) => {
    const[user,setUser]=useContext(manageuser)
    const navigate=useNavigate()

    const {Component}=props
    useLayoutEffect(()=>{
        if(user==""){
            navigate("/signin")
        }


    },[])
  return (
    <div>
      
      <Component/>
    </div>
  )
}

export default Protectrouter

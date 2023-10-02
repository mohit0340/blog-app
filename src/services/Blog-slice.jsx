import { createSlice } from '@reduxjs/toolkit'
import Data from "../blogdata.json"
import React from 'react'



const Blogslice=createSlice({
    name:"blogdata",
    initialState:Data.user, 
    reducers:{
        addcomment:(state,action)=>{
           let a= state[0].blog_posts.filter((val)=>{
              return  val.title.includes(action.payload.id)

            })
            a[0].comments.unshift(action.payload.data)

        },
        addblog:(state,action)=>{
            state[0].blog_posts.push(action.payload)
        },
        removeblog:(state,action)=>{
            state[0].blog_posts.splice(action.payload,1)

        },
        editblog:(state,action)=>{
            state[0].blog_posts.splice(action.payload.id,1,action.payload.data)

        },
    }
})
 
export const{addcomment}=Blogslice.actions
export const{addblog}=Blogslice.actions
export const{removeblog}=Blogslice.actions
export const{editblog}=Blogslice.actions


export default Blogslice.reducer;


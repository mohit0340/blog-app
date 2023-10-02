import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "./Blog-slice";

 const store=configureStore({
    reducer:{
        blog:BlogSlice,
    },
    devTools:true

})

export default store
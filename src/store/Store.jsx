import { configureStore } from "@reduxjs/toolkit";
import loginreducer from './slices/Loginslice.jsx'
 const store=configureStore({
  
    reducer:{
        loginstate:loginreducer,
    }
})

export default store;
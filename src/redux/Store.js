import { configureStore } from '@reduxjs/toolkit'

import UserReducer from'./userSlice'





export const reduxstore = configureStore({
  reducer: {
   
      roomuser:UserReducer,

 },
})


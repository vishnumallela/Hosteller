import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  admin: null,
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    update: (state,action) => {

      state.admin =action.payload
    },
    
    
  },
})


export const {update} = adminSlice.actions

export default adminSlice.reducer
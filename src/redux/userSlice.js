import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const userSlice = createSlice({
  name: 'roomuser',
  initialState,
  reducers: {
    login: (state,action) => {

      state.value = action.payload
    }
    
  },
})


export const { login} = userSlice.actions

export default userSlice.reducer
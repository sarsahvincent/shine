import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: "Shine"
  },
  reducers: {
    update: (state, action) => {
      state.name = action.name.payload;
    }
  }
})

export const { update } = userSlice.actions;

export default userSlice.reducer;
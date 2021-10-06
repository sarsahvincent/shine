import { createSlice } from '@reduxjs/toolkit'

const infoSlice = createSlice({
  name: 'info',
  initialState: {
    info1: "This is information from information one.",
    info2: "This is information from information two.",
    info3: "This is information from information three.",

  },
  reducers: {
    infoUpdate: (state, action) => {
      state.info1 = action.payload.info1;
      state.info2 = action.payload.info2;
      state.info3 = action.payload.info3;
    }
  }
})

export const { infoUpdate } = infoSlice.actions;

export default infoSlice.reducer;
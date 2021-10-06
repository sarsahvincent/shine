import { configureStore } from '@reduxjs/toolkit'
import userReducer from './uerSlice'

export default configureStore({
 reducer : {
    user: userReducer
 }
})


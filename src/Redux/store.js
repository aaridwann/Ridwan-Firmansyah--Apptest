import { configureStore } from '@reduxjs/toolkit'
import  contactSlice  from './slice.js'

export default configureStore({
  reducer: {
    contact: contactSlice
  },
})
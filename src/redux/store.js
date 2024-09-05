import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from './slices/counter'
import phoneSlice  from './slices/phone'
export const store = configureStore({
  reducer: {
    counter:counterSlice,
    phone:phoneSlice
  },
})


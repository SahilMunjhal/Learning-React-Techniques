import { configureStore } from "@reduxjs/toolkit";
import ChatReducer from './SliceChat'

export const store=configureStore({
   reducer:ChatReducer
})
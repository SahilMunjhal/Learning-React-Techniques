import { createSlice } from "@reduxjs/toolkit";


export const ChatSlice=createSlice({
    name:'chatApp',
    initialState:{
        data:[]
    },
    reducers:{
        getData(state){
            return {
                ...state.data
            }
        },
        setData(state,action){
           return {...state,data:[...state.data,action.payload]}
        }
    }
})

export const {getData,setData}=ChatSlice.actions
export default ChatSlice.reducer
// export const selectData=(state)=>state.chatApp.data
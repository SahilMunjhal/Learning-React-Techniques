import { ADD_USER } from "./action";

const intialState={
    todo:[]
}

export const UserReducer=(state=intialState,{type,payload})=>{
    switch(type){
        case ADD_USER :
            return {...state,todo:payload}
        default :
            return state
    }
};


import axios from "axios";

export const ADD_USER="ADD_USER";

export const add_user=(payload)=>{
    return({
        type:ADD_USER,
        payload
});
};

export const add_user_thunk=()=>(dispatch)=>{
    axios.get("http://localhost:2345/users").then(({data})=>{
        dispatch(add_user(data));
    });
}

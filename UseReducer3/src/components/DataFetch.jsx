import { useReducer } from "react";
import {useEffect} from "react";
import axios from "axios";

   const intialState={
      loading:true,
      post:{},
      error:""
   }

   const reducer=(state,action)=>{
       switch(action.type){
          case "Sucessful_Fetch" :
             return {
                loading:false,
                post:action.payload,
                error:""
             }
          case "Failed_Fetch" :
             return{
                loading:false,
                post:{},
                error:"something went wrong"
             }
          default :
            return state;
       }
   }


export const Data_Fetch=()=>{
   const [data,dispatch]=useReducer(reducer,intialState);
   console.log(data,dispatch);
    
   useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts/1")
       .then(({data})=>{
         dispatch({type:"Sucessful_Fetch",payload:data});
       })
       .catch((err)=>{
        dispatch({type:"Failed_Fetch"});
       })
   },[]);

    return(
        <div>
            {data.loading?"Loading.....":data.post.title}
            {data.error?data.error:null}
        </div>
    )
};


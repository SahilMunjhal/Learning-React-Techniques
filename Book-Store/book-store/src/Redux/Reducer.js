import { BOOKDATA } from "./action";
import { ASC_DATA } from "./action";
import { DSC_DATA } from "./action";
import { SEARCH_DATA } from "./action";

const intialState={
    booksArray:[],
    filterArray:[]
};

export const BookReducer=(state=intialState,{type,payload})=>{
    switch(type){
        case BOOKDATA :
            return {...state,booksArray:payload}
        case ASC_DATA :
            let recieve_data=state.booksArray.slice().sort((a,b)=>{
                return a.price-b.price;
            })
            return {...state,booksArray:recieve_data}
        case DSC_DATA :
            let recieve_dsc_data=state.booksArray.slice().sort((a,b)=>b.price-a.price);
           return {...state,booksArray:recieve_dsc_data}
        case SEARCH_DATA :
            return {...state,booksArray:payload}
        default :
            return state
     }
};


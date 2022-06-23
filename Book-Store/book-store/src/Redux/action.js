export const BOOKDATA="BOOKDATA";
export const ASC_DATA="ASC_DATA";
export const DSC_DATA="DSC_DATA";
export const SEARCH_DATA="SEARCH_DATA";
import axios from "axios";

export const bookData=(payload)=>{
    return(
        {
            type:BOOKDATA,
            payload
        }
    )
};

export const asc_data=(payload)=>{
    return(
       {
        type:ASC_DATA,
        payload
       }
    )
};

export const dsc_data=(payload)=>{
    return(
       {
        type:DSC_DATA,
        payload
       }
    )
};

export const search_data=(payload)=>{
    return(
       {
        type:SEARCH_DATA,
        payload
       }
    )
};

export const add_book_data=()=>(dispatch)=>{
    axios.get("https://62a89ad6943591102ba66ccd.mockapi.io/api/v1/books").then(({data})=>{
        dispatch(bookData(data));
    });
};

export const filter_book_data=(payload)=>(dispatch)=>{
    axios.get("https://62a89ad6943591102ba66ccd.mockapi.io/api/v1/books").then(({data})=>{
        let searchData=data.slice().filter((element)=>{
            return element.authorName.indexOf(payload)>=0 || element.name.indexOf(payload)>=0; 
        });
        dispatch(search_data(searchData));
    });
};

export const update_info=(data)=>(dispatch)=>{
    axios.put("").then(({data})=>{
        dispatch(bookData(data));
    });
};




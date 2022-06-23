import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import "./BookFilter.css";
import { asc_data,dsc_data,search_data,filter_book_data } from '../../Redux/action';
import { useDispatch } from 'react-redux';


export const BookFilter=({data})=>{
    const dispatch=useDispatch();
    const [price, setPrice] = useState('');

    const handlePrice = (event) => {
      setPrice(event.target.value);
      if(event.target.value==="asc"){
         console.log(event.target.value);
          dispatch(asc_data());
      }else if(event.target.value==="dsc"){
          console.log(event.target.value);
          dispatch(dsc_data());
      }
    };

    const handleSearch=(event)=>{
        console.log(event.target.value);
        dispatch(filter_book_data(event.target.value));
    }
    

    return(
      <div className='book-filter'>
        <div className='price-filters'>
           <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Price</InputLabel>
                  <Select
                     labelId="demo-select-small"
                     id="demo-select-small"
                     value={price}
                     label="Age"
                     onChange={handlePrice}
                   >
                    <MenuItem value="asc">Low to High </MenuItem>
                    <MenuItem value="dsc">High to Low</MenuItem>
                  </Select>
           </FormControl>
        </div>
      </div>
    )
}
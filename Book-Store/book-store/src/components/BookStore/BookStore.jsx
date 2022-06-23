import { useEffect,useState } from "react";
import {BookFilter} from "../BookFilter/BookFilter";
import axios from "axios";
import "./BookStore.css";
import { useDispatch,useSelector } from "react-redux";
import { add_book_data } from "../../Redux/action";
import {Link} from "react-router-dom";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PopUpComponent from "../PopUp/PopUp";

export const BookStore=()=>{
    
    const dispatch=useDispatch();
    const [open, setOpen] = useState(false);
    const [id,setId] = useState(0);

    const handleClickOpen = () => {
        setOpen(true);
      };
      
      const handleClose = () => {
        setOpen(false);
      };

    useEffect(()=>{
        dispatch(add_book_data());
    },[]);
    
    const books=useSelector((state)=>state.booksArray);

    console.log(books);
    
    const HandleChange = (val)=>{
        setOpen(true)
        setId(val)
    }
    
    
    return(
      <div className="book-store-info">
        <div className="book-filter">
            <BookFilter/>
        </div>
        <div className="books-list">
           {books.map((book)=>{
              return(
                <div className="book-slot" >
                  <div onClick={handleClickOpen}>
                     <img className="book-slot-img" 
                     src={book.coverPage} alt="book-slot" /><br></br>
                  </div>
                     <p ><span className="book-slot-title book-name" >Book-Name</span >
                     - <span className="book-slot-book-name">{book.name}</span></p>
                       <p>
                       <CurrencyRupeeIcon/>
                         <span id="book-slot-price">{book.price}</span></p>
                         {open && <PopUpComponent value={open} close={handleClose} open={handleClickOpen}
                          />}
                  </div> 
              )
            })}
        </div>
     </div>
    )
};


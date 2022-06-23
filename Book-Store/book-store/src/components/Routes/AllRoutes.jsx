import { Route,Routes } from "react-router-dom";

import { BookStore } from "../BookStore/BookStore"
import PopUpComponent from "../PopUp/PopUp"


export const AllRoutes=()=>{

    return(
        <div>
            <Routes>
                <Route path={`/`} element={<BookStore/>}/>
                <Route path={`/individual`} element={<PopUpComponent/>}/>
                {/* <Route path={`/add-book`} element={<AddBook/>}/>
                <Route path={`/edit-book`} element={<EditBook/>}/> */}
            </Routes>
        </div>
    )
}
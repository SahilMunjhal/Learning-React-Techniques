import React from "react";
import {Routes,Route} from "react-router-dom";
import {Home} from "./Home/Home";
import { Product } from "./Products/Product";
const LazyAbout=(()=>import('./About/About'));

export const  AllRoutes=()=>{

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Product/>}/>
            <Route path="/about" element={<React.Suspense fallback="....Loading">
                <LazyAbout/>
            </React.Suspense>
            }/>

        </Routes>
    )
}
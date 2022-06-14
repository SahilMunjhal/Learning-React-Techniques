import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { Store } from './Redux/Store';
import {BrowserRouter} from "react-router-dom";
import {Provider as ReactProvider} from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactProvider store={Store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </ReactProvider>
  </React.StrictMode>
);



import React from "react";

// import "./index.css"
import App from './App'
import  {ReactDOM}  from "react-dom";


import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



root.render(
    <React.StrictMode>
    <App/>

    </React.StrictMode>,
    
)

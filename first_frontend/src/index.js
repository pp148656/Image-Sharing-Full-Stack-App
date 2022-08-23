import React from "react";

import App from './App';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
//why?
// hooking the virtual dom with the original one

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Router> 
        <App />
    </Router>,
);

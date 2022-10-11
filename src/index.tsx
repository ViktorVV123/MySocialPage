import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";





ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
);
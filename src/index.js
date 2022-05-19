import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MainComponent from "./MainComponent";
import 'bootstrap/dist/css/bootstrap.css';
import 'alertifyjs/build/css/alertify.css';
import 'react-pro-sidebar/dist/css/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

var isSignedIn = true;

root.render(
    <React.StrictMode>
        <MainComponent isSignedIn={isSignedIn}/>
    </React.StrictMode>
);


reportWebVitals();

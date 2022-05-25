import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MainComponent from "./MainComponent";
import 'bootstrap/dist/css/bootstrap.css';
import 'alertifyjs/build/css/alertify.css';
import 'react-pro-sidebar/dist/css/styles.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'antd/dist/antd.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <MainComponent/>
    </>
);


reportWebVitals();

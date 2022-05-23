import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Homepage from "./components/homepage/Homepage";

class MainComponent extends Component {
    render() {
        return (
            <div>

                <BrowserRouter basename="/Dashboard">
                    <Dashboard/>
                </BrowserRouter>

                <BrowserRouter basename="/">
                    <Homepage/>
                </BrowserRouter>

            </div>
        );
    }
}

export default MainComponent;
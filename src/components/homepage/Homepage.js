import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import TopNavBar from "./TopNavBar";
import MiddleTextContainer from "./MiddleTextContainer";
import ThreeColumn from "./ThreeColumn";
import Footer from "./Footer";
import SignIn from "./Sign/SignIn";
import SignUp from "./Sign/SignUp";

class Homepage extends Component {
    render() {
        return (
            <div>

                <Routes>
                    <Route path="/" element={
                        <>
                            <TopNavBar/>
                            <MiddleTextContainer/>
                            <ThreeColumn/>
                            <Footer/>
                        </>
                    }/>
                    <Route path="/SignIn" element={
                        <>
                            <TopNavBar/>
                            <SignIn/>
                            <Footer/>
                        </>
                    }/>
                    <Route path="/SignUp" element={
                        <>
                            <TopNavBar/>
                            <SignUp/>
                            <Footer/>
                        </>
                    }/>
                </Routes>
            </div>
        );
    }
}

export default Homepage;
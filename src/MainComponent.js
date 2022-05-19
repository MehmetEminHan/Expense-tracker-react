import React, {Component} from 'react';
import TopNavBar from "./components/homepage/TopNavBar";
import MiddleTextContainer from "./components/homepage/MiddleTextContainer";
import ThreeColumn from "./components/homepage/ThreeColumn";
import Footer from "./components/homepage/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./components/homepage/Sign/SignIn";
import SignUp from "./components/homepage/Sign/SignUp";
import SliderNavBar from "./components/dashboard/SliderNavBar";
import {Col, Container, Row} from "react-bootstrap";
import ViewExpenses from "./components/dashboard/ViewExpenses";
import DashboardTopNavBar from "./components/dashboard/DashboardTopNavBar";

class MainComponent extends Component {
    render() {
        return (
            <div>

                <BrowserRouter>

                    <Routes>
                        <Route path="/Dashboard" element={
                            <>
                                <Container fluid>
                                    <Row>
                                        <DashboardTopNavBar />
                                    </Row>
                                    <Row className="justify-content-center">
                                        <SliderNavBar/>
                                        <Col xs="9">
                                            a
                                        </Col>
                                    </Row>
                                </Container>
                            </>
                        }/>

                        <Route path="/Dashboard/Expense" element={
                            <>
                                <Container fluid>
                                    <Row>
                                        <DashboardTopNavBar />
                                    </Row>
                                    <Row className="justify-content-center">
                                        <SliderNavBar/>
                                        <Col xs="9">
                                            <ViewExpenses/>
                                        </Col>
                                    </Row>
                                </Container>
                            </>
                        }/>

                        {/*TODO Solve the Routing problem*/}
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

                </BrowserRouter>

            </div>
        );
    }
}

export default MainComponent;
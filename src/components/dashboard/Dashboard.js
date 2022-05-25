import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import DashboardNavbar from "./DashboardNavbar";
import DashboardHome from "./DashboardHome";
import DashboardFooter from "./DashboardFooter";
import DashboardSidebar from "./DashboardSidebar";
import {Route, Routes} from "react-router-dom";
import ViewExpenses from "./ViewExpenses";
import AddExpense from "./AddExpense";

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false,
            containerStyle: {
                paddingLeft: 0, paddingRight: 0
            },
            rowStyle: {
                marginLeft: 0, marginRight: 0
            },
            colStyle: {
                paddingLeft: 0, paddingRight: 0
            }
        }

    }

    handleClose = () => {
        this.setState({show: false});
    }

    handleShow = () => {
        this.setState({show: true});
    }

    render() {
        return (
            <div>

                <DashboardSidebar show={this.state.show} handleClose={this.handleClose}/>

                <Container fluid style={this.state.containerStyle}>
                    <Row style={this.state.rowStyle}>
                        <Col style={this.state.colStyle}>
                            <DashboardNavbar show={this.state.show} handleShow={this.handleShow}/>
                        </Col>
                    </Row>

                    <Row style={this.state.rowStyle}>
                        <Col style={this.state.colStyle} xs="11" className="mx-auto">
                            <Routes>
                                <Route path="/" element={<DashboardHome/>}/>
                                <Route path="/Expenses" element={<ViewExpenses/>}/>
                                <Route path="/AddExpense" element={<AddExpense/>}/>
                            </Routes>

                        </Col>
                    </Row>

                    <Row style={this.state.rowStyle}>
                        <Col style={this.state.colStyle}>
                            <DashboardFooter/>
                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}

export default Dashboard;
import React, {Component} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

class DashboardTopNavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: "#222831"}}>
                    <Container className="text-center">
                        <Navbar.Brand href="#home" className="text-center">Expense Tracker Dashboard</Navbar.Brand>
                    </Container>
                </Navbar>

            </div>
        );
    }
}

export default DashboardTopNavBar;
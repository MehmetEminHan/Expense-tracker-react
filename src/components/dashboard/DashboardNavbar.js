import React, {Component} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {List} from "react-bootstrap-icons";
import {Link} from "react-router-dom";

class DashboardNavbar extends Component {
    render() {
        return (
            <div>

                <Navbar collapseOnSelect style={{backgroundColor: "#293462"}} variant="dark">
                    <Container fluid>
                        <Button variant="primary" onClick={this.props.handleShow}>
                            <List/>
                        </Button>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">

                                    <Link to="/"><Navbar.Brand>Expense Tracker</Navbar.Brand></Link>

                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        );
    }
}

export default DashboardNavbar;
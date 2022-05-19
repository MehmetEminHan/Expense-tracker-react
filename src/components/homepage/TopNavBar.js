import React, {Component} from 'react';
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

class TopNavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand ><Link to="/" className="text-decoration-none text-white">Expense Tracker</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">First </Nav.Link>
                                <Nav.Link href="#pricing">Second</Nav.Link>
                                <NavDropdown title="Third" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link>

                                    <Link to="/SignIn">
                                        <Button colorScheme='primary' variant='success'>
                                            Sign in
                                        </Button>
                                    </Link>

                                </Nav.Link>
                                <Nav.Link>

                                    <Link to="/SignUp">
                                        <Button variant='primary'>
                                            Sign up
                                        </Button>
                                    </Link>

                                </Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default TopNavBar;
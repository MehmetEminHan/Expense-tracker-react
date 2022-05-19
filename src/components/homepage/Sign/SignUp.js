import React, {Component} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import alertify from 'alertifyjs';

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customStyle: {
                checkBoxLink: {
                    textDecoration: "none",
                    color: "black"
                }
            },
            firstEmail: "",
            secondEmail: "",

            firstPassword: "",
            secondPassword: ""
        }

    }


    verifyInputs = () => {

        if (this.state.firstEmail === this.state.secondEmail && this.state.firstPassword === this.state.secondPassword && this.state.firstEmail !== "") {
            console.log("Success!");
        } else if (this.state.firstEmail !== this.state.secondEmail && this.state.firstPassword === this.state.secondPassword) {
            alertify.alert('E-Mails is not match').set('basic', true);
            console.log("Not Success!");
        } else if (this.state.firstEmail !== this.state.secondEmail && this.state.firstPassword !== this.state.secondPassword) {
            alertify.alert('E-Mails or Password are not match').set('basic', true);
            console.log("Not Success!");
        } else if (this.state.firstEmail === "" || this.state.secondEmail === null || this.state.firstPassword === null || this.state.secondPassword === null) {
            alertify.alert('E-Mails or Password space can not empty!').set('basic', true);
        } else {
            alertify.alert('Passwords is not match').set('basic', true);
            console.log("Not Success!");
        }

    }


    render() {
        return (
            <div>
                <Container className="mt-5">
                    <Row className="mb-3">
                        <h1 className="display-5">Sign Up</h1>
                    </Row>
                    <Form>
                        <Row className="mb-3">
                            <Col>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="First name"/>
                            </Col>
                            <Col>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Last name"/>
                            </Col>
                        </Row>
                        <Row className="mb-3">

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"
                                              value={this.state.firstEmail}
                                              onChange={(event) => this.setState({firstEmail: event.target.value})}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email*</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"
                                              value={this.state.secondEmail}
                                              onChange={(event) => this.setState({secondEmail: event.target.value})}/>
                            </Form.Group>

                        </Row>
                        <Row className="mb-4">
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                              value={this.state.firstPassword}
                                              onChange={(event) => this.setState({firstPassword: event.target.value})}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password*</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                              value={this.state.secondPassword}
                                              onChange={(event) => this.setState({secondPassword: event.target.value})}/>
                            </Form.Group>
                        </Row>


                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    <a href="/Home" style={this.state.customStyle.checkBoxLink}>Read &
                                        Accept</a>
                                </label>
                            </div>
                        </Form.Group>
                        <Button onClick={this.verifyInputs} variant="primary" className="mt-2">
                            Sign Up
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default SignUp;
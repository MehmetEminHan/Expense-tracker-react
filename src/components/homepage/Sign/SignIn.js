import React, {Component} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class SignIn extends Component {
    render() {
        return (
            <>
                <Container className="mt-5 mb-5">
                    <Row>
                        <h1 className="display-5">Sign In</h1>
                    </Row>
                    <Row>
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Email
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email"/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Password
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" placeholder="Password"/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                                <Col sm={{span: 10, offset: 2}}>
                                    <Form.Check label="Remember me"/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{span: 10, offset: 2}}>
                                    <Button type="submit">Sign in</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Row>
                </Container>
            </>
        );
    }
}

export default SignIn;
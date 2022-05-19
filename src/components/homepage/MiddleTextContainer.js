import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";

class MiddleTextContainer extends Component {
    render() {
        return (
            <div style={
                {
                    backgroundColor: "#dedede",
                }
            }>
                <section className="py-5 text-center container">
                    <Row className="py-lg-5">
                        <Col lg="6" md="8" className="mx-auto">
                            <h1 className="fw-light">About Expense Tracker</h1>
                            <p className="lead text-muted">Something short and leading about t he collection below—its
                                contents, the creator, etc. Make it short and sweet, b ut not too short so folks don’t
                                simply skip over it entirely.</p>
                            <p>

                                <Button variant="primary" className="me-1">Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                            </p>
                        </Col>
                    </Row>
                </section>
            </div>
        );
    }
}

export default MiddleTextContainer;
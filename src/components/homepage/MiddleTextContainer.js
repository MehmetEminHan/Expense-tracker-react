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
                            <p className="lead text-muted">Expense Tracker were developed for the help your money
                                management.
                                Expense Tracker aims to reduce your effort to keep your expenses for hours via
                                spreadsheets to a minimum.</p>
                            <p>

                                <Button variant="primary" className="me-1">About Us</Button>

                            </p>
                        </Col>
                    </Row>
                </section>
            </div>
        );
    }
}

export default MiddleTextContainer;
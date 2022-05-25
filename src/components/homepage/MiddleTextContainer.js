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
                            <p className="lead text-muted">Expense Tracker is a tracker website which you can use for
                                track your expanse and watch your expense analysis. In future, we are going to add
                                goal/limit, option of compare with older expenses, option of categorize expense and etc.
                                Now, you can use only track your expenses.</p>
                            <p>

                                <Button variant="primary" className="me-1" href="/AboutUs">About Us</Button>

                            </p>
                        </Col>
                    </Row>
                </section>
            </div>
        );
    }
}

export default MiddleTextContainer;
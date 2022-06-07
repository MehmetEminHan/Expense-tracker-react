import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class MiddleTextContainer extends Component {
    render() {
        return (
            <div style={
                {
                    backgroundColor: "#FAF0D7",
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

                               <Link to="/AboutUS"> <Button variant="primary" className="me-1">About Us</Button></Link>

                            </p>
                        </Col>
                    </Row>
                </section>
            </div>
        );
    }
}

export default MiddleTextContainer;
import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import Photo from "./images/expensedashboard.png";
import Photo2 from "./images/expenseadd.png";
import HeaderPhoto1 from "./images/header1.png";
import HeaderPhoto2 from "./images/header2.png"
import HeaderPhoto3 from "./images/header3.png"


class ThreeColumn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customStyle: {
                customFont: {fontSize: "25px"},
                customMargin: {marginTop: "15%"}
            }
        }

    }


    render() {
        return (
            <>

                <Container className="py-5 container mt-3">
                    <Row className="text-center mb-5">
                        <Col lg="4">

                            <img src={HeaderPhoto1} className="bd-placeholder-img rounded-circle" width="140"
                                 height="140"/>

                            <h2 className="fw-normal">Money Management</h2>
                            <p>It will help you approach your money management from a different perspective.</p>
                            <p><Button variant="success">Success</Button></p>
                        </Col>
                        <Col lg="4">
                            <img src={HeaderPhoto2} className="bd-placeholder-img rounded-circle" width="140"
                                 height="140"/>


                            <h2 className="fw-normal">Money Tracking</h2>
                            <p>You will control your expenses more easily with to the easy interface.</p>
                            <p><Button variant="success">Success</Button></p>
                        </Col>
                        <Col lg="4">
                            <img src={HeaderPhoto3} className="bd-placeholder-img rounded-circle" width="140"
                                 height="140"/>

                            <h2 className="fw-normal">Easy Access</h2>
                            <p>Easy access and management wherever you are in the world.</p>
                            <p><Button variant="success">Success</Button></p>
                        </Col>
                    </Row>

                    <Row>
                        <hr className="mt-5"/>
                        <Col md="6">


                            <figure style={this.state.customStyle.customMargin}>
                                <blockquote className="blockquote" style={this.state.customStyle.customFont}>
                                    <p>An easy-to-use interface so you can see all your expenses. You can easily track
                                        your expenses on a weekly, daily and monthly basis. You can delete or manage
                                        your expenses easily.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer" style={this.state.customStyle.customFont}>
                                    Track your expenses easily <cite title="Source Title">COMFORTABLE INTERFACE</cite>
                                </figcaption>
                            </figure>

                        </Col>
                        <Col sm="6" className="text-center">

                            <img src={Photo} className="mt-5 mb-5" width="550" height="370"/>

                        </Col>
                    </Row>

                    <Row>
                        <hr className="mt-5"/>
                        <Col lg="6">
                            <img src={Photo2} className="mt-5 mb-5 " width="550" height="400"/>
                        </Col>
                        <Col lg="6">
                            <figure className="text-end" style={this.state.customStyle.customMargin}>
                                <blockquote className="blockquote" style={this.state.customStyle.customFont}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed arcu
                                        interdum, interdum felis eget, venenatis ante. Morbi vestibulum sollicitudin
                                        urna, eu sollicitudin mi venenatis non. Vivamus posuere risus eget nibh
                                        lobortis</p>
                                </blockquote>
                                <figcaption className="blockquote-footer" style={this.state.customStyle.customFont}>
                                    Add your expenses easily
                                </figcaption>
                            </figure>


                        </Col>
                    </Row>
                </Container>

            </>
        );
    }
}

export default ThreeColumn;
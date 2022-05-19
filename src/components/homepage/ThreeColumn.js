import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

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
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                                 xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                                 preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#777"/>
                                <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                            </svg>

                            <h2 className="fw-normal">Heading</h2>
                            <p>Some representative placeholder content for the three columns of text below the
                                carousel. This is the first column.</p>
                            <p><Button variant="success">Success</Button></p>
                        </Col>
                        <Col lg="4">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                                 xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                                 preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#777"/>
                                <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                            </svg>

                            <h2 className="fw-normal">Heading</h2>
                            <p>Another exciting bit of representative placeholder content. This time, we've moved on
                                to the second column.</p>
                            <p><Button variant="success">Success</Button></p>
                        </Col>
                        <Col lg="4">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                                 xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                                 preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#777"/>
                                <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                            </svg>

                            <h2 className="fw-normal">Heading</h2>
                            <p>And lastly this, the third column of representative placeholder content.</p>
                            <p><Button variant="success">Success</Button></p>
                        </Col>
                    </Row>

                    <Row>
                        <hr className="mt-5"/>
                        <Col md="6">


                            <figure style={this.state.customStyle.customMargin}>
                                <blockquote className="blockquote" style={this.state.customStyle.customFont}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed arcu
                                        interdum, interdum felis eget, venenatis ante. Morbi vestibulum sollicitudin
                                        urna, eu sollicitudin mi venenatis non. Vivamus posuere risus eget nibh
                                        lobortis, eget scelerisque sem ornare. Duis lacinia urna ac cursus aliquet.
                                        Proin ante lorem, viverra id dictum eget, efficitur et erat. Mauris accumsan
                                        porttitor metus, luctus placerat ante vehicula et. Morbi auctor mattis risus. In
                                        ut ornare ipsum.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer" style={this.state.customStyle.customFont}>
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </figcaption>
                            </figure>

                        </Col>
                        <Col sm="6" className="text-center">

                            <img src="https://picsum.photos/500/500" className="mt-5 mb-5"/>

                        </Col>
                    </Row>

                    <Row>
                        <hr className="mt-5"/>
                        <Col md="6">
                            <img src="https://picsum.photos/500/500" className="mt-5 mb-5"/>
                        </Col>
                        <Col md="6">
                            <figure className="text-end" style={this.state.customStyle.customMargin}>
                                <blockquote className="blockquote" style={this.state.customStyle.customFont}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed arcu
                                        interdum, interdum felis eget, venenatis ante. Morbi vestibulum sollicitudin
                                        urna, eu sollicitudin mi venenatis non. Vivamus posuere risus eget nibh
                                        lobortis</p>
                                </blockquote>
                                <figcaption className="blockquote-footer" style={this.state.customStyle.customFont}>
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </figcaption>
                            </figure>


                        </Col>
                    </Row>

                    <Row>
                        <hr className="mt-5"/>
                        <Col md="6">

                            <figure style={this.state.customStyle.customMargin}>
                                <blockquote className="blockquote" style={this.state.customStyle.customFont}>
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer" style={this.state.customStyle.customFont}>
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </figcaption>
                            </figure>

                        </Col>
                        <Col md="6" className="text-center">

                            <img src="https://picsum.photos/500/500" className="mt-5 mb-5"/>

                        </Col>
                    </Row>
                </Container>

            </>
        );
    }
}

export default ThreeColumn;
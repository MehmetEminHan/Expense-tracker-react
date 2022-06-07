import React, {Component} from 'react';
import {Col, Container, Figure, Row} from "react-bootstrap";
import {Github} from "react-bootstrap-icons";

class AboutUs extends Component {
    render() {
        return (
            <div>
                <Container className="mt-5">
                    <h1 style={{
                        textAlign: "center",
                        marginBottom: "50px"
                    }}>About Us</h1>
                    <Row>
                        <Col md="6" className="text-center">
                            <Figure>
                                <Figure.Image
                                    width={300}
                                    height={300}
                                    alt="271x280"
                                    src="https://avatars.githubusercontent.com/u/85755585?v=4"
                                />
                            </Figure>
                        </Col>
                        <Col md="6">

                            <p className="lead text-muted">Ahmet Kazak was born in Istanbul at 1999. He studied at
                                Suleyman Demirel University as Electronic and Communications Engineering. He worked at
                                MSD, Gaye Asansor and Bilge Adam Companies as a Software Engineer until his work life.
                                After graduation he stared to work at Garanti Banks as Jr. Software engineer and he
                                still work. He still improving himself on Java, React, Spring Boot. </p>
                            <a className="text-muted" href="https://github.com/ahmtkzk" target="_blank">
                                <Github style={{
                                    width:"30px",
                                    height:"30px"
                                }}/>
                            </a>


                        </Col>
                    </Row>
                    <Row style={{
                        marginTop: "100px"
                    }}>

                        <Col md="6">

                            <p className="lead text-muted">Han Biyik was born in Istanbul at 1999. He studied at
                                Suleyman Demirel University as Electronic and Communications Engineering. He worked at
                                Ozgen Solar Energy Company, Gaye Asansor as a Software Engineer intern until his work life.
                                He still improving himself on Java, React, Spring Boot.</p>
                            <a className="text-muted" href="https://github.com/MehmetEminHan" target="_blank">
                                <Github style={{
                                    width:"30px",
                                    height:"30px"
                                }}/>
                            </a>


                        </Col>
                        <Col md="6" className="text-center">
                            <Figure>
                                <Figure.Image
                                    width={300}
                                    height={300}
                                    alt="271x280"
                                    src="https://avatars.githubusercontent.com/u/63428174?s=400&u=f263986c6fb6768517df704dfce6803afdb448dd&v=4"
                                />
                            </Figure>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default AboutUs;
import React, {Component} from 'react';
import {Button, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import * as PropTypes from "prop-types";


function DatePicker(props) {
    return null;
}

DatePicker.propTypes = {
    renderInput: PropTypes.func,
    onChange: PropTypes.func,
    openTo: PropTypes.string,
    disableFuture: PropTypes.bool,
    label: PropTypes.string,
    views: PropTypes.arrayOf(PropTypes.string)
};

class AddExpense extends Component {


    constructor(props) {
        super(props);

        this.state = {

            inputValue: null

        }
    }

    onChange = (event) => {
        if (event > 0) {
            this.setState({inputValue: event})
        } else {
            this.setState({inputValue: 0})
        }
    }


    render() {

        return (
            <div>
                <Container className="mt-5">
                    <Row>
                        <h1>Add Expense</h1>
                    </Row>
                    <Form>
                        <Row className="mb-3">
                            <Col md="6">
                                <Form.Label>Expense Coast</Form.Label>
                                <InputGroup as={Col} className="mb-3">

                                    <InputGroup.Text>$</InputGroup.Text>

                                    <FormControl type="number" placeholder="0" value={this.state.inputValue}
                                                 onChange={(event) => {
                                                     this.onChange(event.target.value)
                                                 }}/>
                                </InputGroup>
                            </Col>

                            <Col md="6">
                                <Form.Group as={Col} controlId="formGridNote">
                                    <Form.Label>Note</Form.Label>
                                    <Form.Control type="note" placeholder="Note"/>
                                </Form.Group>
                            </Col>
                        </Row>


                        <Row>

                            <Col ms="6">
                                <div>
                                    <Form.Group controlId="dob">
                                        <Form.Label>Select Expense Date</Form.Label>
                                        <Form.Control type="date" name="dob" placeholder="Date of Birth"/>
                                    </Form.Group>
                                </div>
                            </Col>

                            <Col ms="6">
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Expense Kind</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>MARKET</option>
                                        <option>HEALTH</option>
                                        <option>TRANSPORTING</option>
                                        <option>OTHER</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>


                        </Row>

                        <Button variant="primary" type="submit" className="mt-5">
                            Submit
                        </Button>
                    </Form>

                </Container>

            </div>
        );
    }
}


export default AddExpense;
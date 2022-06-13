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

            expense: 0,
            expenseDate: null,
            expenseNote: null,
            expenseCategory: null,
            userId: null

        }
    }

    onChange = (event) => {
        if (event > 0) {
            this.setState({expense: event});
        } else {
            this.setState({expense: 0});
        }
    }


    saveExpense = () => {

        let postData = {
            expense: this.state.expense,
            expenseDate: this.state.expenseDate,
            expenseNote: this.state.expenseNote,
            expenseCategory: this.state.expenseCategory,
            userId: 1
        }

        fetch("http://localhost:8080/v0/ExpenseTracker/Daily/save",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData)
            }
        ).then(x => console.log(x.status));


    }


    render() {

        return (
            <div>
                <Container className="mt-5 mb-5">
                    <Row>
                        <h1>Add Expense</h1>
                    </Row>

                    <Row className="mb-3">
                        <Col md="6">
                            <Form.Label>Expense Coast</Form.Label>
                            <InputGroup as={Col} className="mb-3">

                                <InputGroup.Text>$</InputGroup.Text>

                                <FormControl type="number" value={this.state.expense}
                                             onChange={(event) => {
                                                 this.onChange(event.target.value)
                                             }}/>
                            </InputGroup>
                        </Col>

                        <Col md="6">
                            <Form.Label>
                                Notes
                            </Form.Label>
                            <Form.Control type="text" placeholder="Expense note"
                                          onChange={(e) => this.setState({expenseNote: e.target.value})}/>
                        </Col>
                    </Row>


                    <Row>

                        <Col ms="6">
                            <div>
                                <Form.Group controlId="dob">
                                    <Form.Label>Select Expense Date</Form.Label>
                                    <Form.Control type="datetime-local" placeholder="Date of Birth"
                                                  onChange={(e) => this.setState({expenseDate: e.target.value})}/>
                                </Form.Group>
                            </div>
                        </Col>

                        <Col ms="6">
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Expense Kind</Form.Label>
                                <Form.Select defaultValue="Choose..."
                                             onChange={(e) => this.setState({expenseCategory: e.target.value})}>
                                    <option>Choose...</option>
                                    <option>MARKET</option>
                                    <option>HEALTH</option>
                                    <option>TRANSPORTING</option>
                                    <option>OTHER</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>


                    </Row>

                    <Button variant="primary" type="button" onClick={this.saveExpense} className="mt-5">
                        Submit
                    </Button>

                </Container>

            </div>
        );
    }
}


export default AddExpense;
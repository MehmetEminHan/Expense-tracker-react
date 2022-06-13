import React, {Component} from 'react';
import {Accordion, Button, Col, Container, Row, Table} from "react-bootstrap";
import {ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';
import faker from 'faker';
import {Bar, Pie} from 'react-chartjs-2';
import {Breadcrumb} from "antd";


class ViewExpenses extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dailyExpenses: [],
            pageNumber: 0,
        }
    }

    componentDidMount() {

        this.fetchAllDailyExpenses();
        this.setState({pageNumber: this.state.pageNumber + 1});

    }

    fetchAllDailyExpenses = () => {

        let fetchDailyExpensesDatas = "http://localhost:8080/v0/ExpenseTracker/Daily/fetchAll/" + this.state.pageNumber

        fetch(fetchDailyExpensesDatas + this.state.fetchAllPageNumber)
            .then((datas) => datas.json())
            .then((finalData) => this.setState({dailyExpenses: finalData}));

    }

    previousPage = () => {

        if (0 < this.state.fetchAllPageNumber) {
            this.state.fetchAllPageNumber--;
            this.setState({fetchAllPageNumber: this.state.fetchAllPageNumber});
            this.fetchAllDailyExpenses();
        } else {
            this.setState({fetchAllPageNumber: 0});
            this.fetchAllDailyExpenses();
        }

    }

    nextPage = () => {

        this.fetchAllDailyExpenses();
        this.setState({pageNumber: this.state.pageNumber + 1});
        console.log(this.state.pageNumber);

    }

    render() {
        const options = {
            responsive: true,
            plugins: {
                legend: {},
                title: {
                    display: true,
                    text: 'Expenses',
                },
            },
        };

        const optionsPie = {
            responsive: true,
            plugins: {
                legend: {},
                title: {
                    display: true,
                    text: 'Expenses Pie'
                }
            }
        }

        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agust'];

        ChartJS.register(
            CategoryScale,
            LinearScale,
            BarElement,
            Title,
            Tooltip,
            Legend,
            ArcElement
        );

        const data = {
            labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                    label: 'Dataset 2',
                    data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
                {
                    label: 'Dataset 3',
                    data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
                    backgroundColor: 'green',
                },
                {
                    label: 'Dataset 3',
                    data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
                    backgroundColor: 'yellow',
                },

            ],
        };

        const data2 = {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255,99,132,0.2)',
                        'rgba(54,162,235,0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgb(255,99,132)',
                        'rgb(54,162,235)',
                        'rgb(255,206,86)',
                        'rgb(75,192,192)',
                        'rgb(153,102,255)',
                        'rgb(255,159,64)',
                    ],
                    borderWidth: 1,
                },
            ],
        };

        return (
            <div className="mt-5">

                <Container fluid>

                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Expense View</Breadcrumb.Item>
                    </Breadcrumb>

                    <Row className="mb-5 mt-5">
                        <Col md="8">
                            <Bar options={options} data={data} width="320px"/>
                        </Col>

                        <Col md="4">
                            <Pie options={optionsPie} data={data2}/>
                        </Col>

                    </Row>

                    {/*TODO write another accordions for the other expenses!!!*/}
                    <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Show Daily Expenses</Accordion.Header>
                            <Accordion.Body>
                                <Table striped bordered hover variant="light">

                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Expense Date</th>
                                        <th>Expense Kind</th>
                                        <th>Expense Coast</th>
                                        <th>Expense Note</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {this.state.dailyExpenses.map((x) => (<tr>
                                        <td>{x.id}</td>
                                        <td>{x.expenseDate}</td>
                                        <td>{x.expenseCategory}</td>
                                        <td>{x.expense}</td>
                                        <td>{x.expenseNote}</td>
                                        <td>
                                            <Button variant="outline-primary" style={{
                                                marginRight: "10px"
                                            }}>Edit</Button>
                                            <Button variant="outline-danger">Delete</Button>
                                        </td>


                                    </tr>))}

                                    </tbody>


                                </Table>
                                <Button variant="outline-danger" onClick={this.previousPage}>Previos</Button>
                                <Button variant="outline-success" onClick={this.nextPage}>Next</Button>

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <Row className="mt-2">
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Show Weekly Expenses</Accordion.Header>
                                <Accordion.Body>
                                    <Table striped bordered hover variant="light">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Expense Date</th>
                                            <th>Expense Kind</th>
                                            <th>Expense Coast</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>06/22/22</td>
                                            <td>Market</td>
                                            <td>$156</td>
                                            <td>
                                                <Button variant="outline-primary" style={{
                                                    marginRight: "10px"
                                                }}>Edit</Button>
                                                <Button variant="outline-danger">Delete</Button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </Row>

                    <Row className="mt-2">
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Show Monthly Expenses</Accordion.Header>
                                <Accordion.Body>
                                    <Table striped bordered hover variant="light">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Expense Date</th>
                                            <th>Expense Kind</th>
                                            <th>Expense Coast</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td typeof="date">1</td>
                                            <td>06/22/22</td>
                                            <td>Market</td>
                                            <td>$156</td>
                                            <td>
                                                <Button variant="outline-primary" style={{
                                                    marginRight: "10px"
                                                }}>Edit</Button>
                                                <Button variant="outline-danger">Delete</Button>
                                            </td>
                                        </tr>


                                        </tbody>
                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </Row>

                </Container>


            </div>
        );
    }
}

export default ViewExpenses;
import React, {Component} from 'react';
import {Accordion, Col, Container, Row, Table} from "react-bootstrap";
import {BarElement, CategoryScale, ArcElement, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';
import faker from 'faker';
import {Bar, Pie} from 'react-chartjs-2';


class ViewExpenses extends Component {
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
            <div>

                <Container fluid>
                    <Row className="mb-5 mt-5">
                        <Col md="8">
                            <Bar options={options} data={data} width="320px"/>
                        </Col>

                        <Col md="4">
                            <Pie options={optionsPie} data={data2}/>
                        </Col>

                    </Row>

                    {/*TODO write another accordions for the other expenses!!!*/}
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Show Expenses</Accordion.Header>
                                <Accordion.Body>
                                    <Table striped bordered hover variant="light">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Expense Date</th>
                                            <th>Expense Kind</th>
                                            <th>Expense Coast</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>06/22/22</td>
                                            <td>Market</td>
                                            <td>$156</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>06/23/22</td>
                                            <td>Ticket</td>
                                            <td>$16</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>06/24/22</td>
                                            <td>Transportation</td>
                                            <td>$15</td>
                                        </tr>


                                        </tbody>
                                    </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Row className="mt-5">

                        </Row>
                        </Container>


                        </div>
                        );
                    }
                    }

                    export default ViewExpenses;
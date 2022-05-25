import React, {Component} from 'react';
import {Col, Offcanvas} from "react-bootstrap";
import "./style/DashboardSidebar.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";
import {HouseFill, WalletFill} from "react-bootstrap-icons";

class DashboardSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }


    sidebarMenu = () => {

        return (

            <Col>
                <div className="flex-shrink-0 p-3 bg-white" style={{width: "270px"}}>
                    <ul className="list-unstyled ps-0">
                        <li className="mb-1">

                            <Link to="/">
                                <button
                                    className="btn custom-button d-inline-flex align-items-center rounded border-0 collapsed"
                                    data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                    <HouseFill className="me-1"/> Home
                                </button>
                            </Link>

                        </li>
                        <li className="mb-1">

                            <Link to="/Expenses">
                                <button
                                    className="btn custom-button d-inline-flex align-items-center rounded border-0 collapsed"
                                    data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                    <WalletFill className="me-1"/> Expenses
                                </button>
                            </Link>

                        </li>
                        <li className="mb-1">
                            <button
                                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                Transactions
                            </button>
                            <div className="collapse" id="orders-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li>
                                        <Link to="/AddExpense"
                                           className="link-dark d-inline-flex text-decoration-none rounded">Add new
                                            expense
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

            </Col>
        );
    }

    render() {
        return (
            <div>

                <Offcanvas show={this.props.show}
                           onHide={this.props.handleClose}
                           scroll={true}
                           backdrop={true}
                           style={{width: "300px"}}>

                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>

                        {this.sidebarMenu()}

                    </Offcanvas.Body>

                </Offcanvas>

            </div>
        );
    }
}

export default DashboardSidebar;
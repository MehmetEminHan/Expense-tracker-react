import React, {Component} from 'react';
import {Col, Offcanvas} from "react-bootstrap";
import "./style/DashboardSidebar.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";

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
                <div className="flex-shrink-0 p-3 bg-white" style={{width: "330px"}}>
                    <ul className="list-unstyled ps-0">
                        <li className="mb-1">

                            <Link to="/">
                                <button
                                    className="btn d-inline-flex align-items-center rounded border-0 collapsed"
                                    data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                    Home
                                </button>
                            </Link>
                        </li>
                        <li className="mb-1">
                            <button
                                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                Pages
                            </button>
                            <div className="collapse" id="dashboard-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="/Expenses"
                                           className="link-dark d-inline-flex text-decoration-none rounded">Expenses</Link>
                                    </li>
                                    <li><a href="#"
                                           className="link-dark d-inline-flex text-decoration-none rounded">Weekly</a>
                                    </li>
                                    <li><a href="#"
                                           className="link-dark d-inline-flex text-decoration-none rounded">Monthly</a>
                                    </li>
                                    <li><a href="#"
                                           className="link-dark d-inline-flex text-decoration-none rounded">Annually</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button
                                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                Orders
                            </button>
                            <div className="collapse" id="orders-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#"
                                           className="link-dark d-inline-flex text-decoration-none rounded">New</a></li>
                                    <li><a href="#"
                                           className="link-dark d-inline-flex text-decoration-none rounded">Processed</a>
                                    </li>
                                    <li><a href="#"
                                           className="link-dark d-inline-flex text-decoration-none rounded">Shipped</a>
                                    </li>
                                    <li><a href="#"
                                           className="link-dark d-inline-flex text-decoration-none rounded">Returned</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="border-top my-3"></li>
                        <li className="mb-1">
                            <button
                                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                Account
                            </button>
                            <div className="collapse" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#"
                                           className="link-dark d-inline-flex text-decoration-none rounded">New...</a>
                                    </li>
                                    <li><a href="#"
                                           className="link-dark d-inline-flex text-decoration-none rounded">Profile</a>
                                    </li>
                                    <li><a href="#"
                                           className="link-dark d-inline-flex text-decoration-none rounded">Settings</a>
                                    </li>
                                    <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Sign
                                        out</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div className="dropdown bottom-100 mb-4 ms-2 mt-4 end-0">
                        <a href="#"
                           className="d-flex align-items-center text-decoration-none dropdown-toggle"
                           id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32"
                                 className="rounded-circle me-2"/>
                            <strong className="text-black">User</strong>
                        </a>
                        <ul className="dropdown-menu text-small shadow"
                            aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>

            </Col>
        );
    }

    render() {
        return (
            <div>

                <Offcanvas show={this.props.show}
                           onHide={this.props.handleClose} s
                           croll={true}
                           backdrop={true}>

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
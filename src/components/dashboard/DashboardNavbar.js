import React, {Component} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ArrowReturnLeft, BoxArrowLeft, Gear, List, PersonCircle} from "react-bootstrap-icons";
import {Dropdown, Menu} from "antd";
import {UserOutlined} from "@ant-design/icons";

class DashboardNavbar extends Component {

    constructor(props) {
        super(props);

    }

    showOverlayMenu = () => {

        return (
            <Menu items={[
                {
                    label: "Profile",
                    key: '1',
                    icon: <UserOutlined/>,
                },
                {
                    label: <a href="/" target="_blank">Return website</a>,
                    key: '2',
                    icon: <ArrowReturnLeft/>,
                },
                {
                    label: 'Settings',
                    key: '3',
                    icon: <Gear/>,
                },
                {
                    label: 'Exit',
                    key: '4',
                    icon: <BoxArrowLeft/>,
                }
            ]} />
        );
    }


    render() {
        return (
            <div>

                <Navbar collapseOnSelect style={{backgroundColor: "#293462"}} variant="dark">
                    <Container fluid>
                        <Button variant="primary" onClick={this.props.handleShow}>
                            <List/>
                        </Button>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>

                            <Nav className="me-5">

                                <Dropdown.Button placement="bottom" icon={<PersonCircle/>}
                                                 overlay={this.showOverlayMenu}>
                                    Mehmet
                                </Dropdown.Button>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        );
    }
}

export default DashboardNavbar;
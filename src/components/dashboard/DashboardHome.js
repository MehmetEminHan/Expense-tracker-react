import React, {Component} from 'react';
import {Alert, Row} from "react-bootstrap";
import {Breadcrumb} from "antd";

class DashboardHome extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className="mt-5">

                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>

                <Row className="mt-4">
                    <Alert key="success" variant="success">
                        <h1 className="display-6">Welcome to Expense Tracker!</h1>
                        <br/>
                        <p>Expense Tracker is a tracker website which you can use for track your expanse and watch your
                            expense analysis. In future, we are going to add goal/limit, option of compare with older
                            expenses, option of categorize expense and etc. Now, you can use only track your expenses.
                            <br/></p>
                        <p>You can track your expenses and expense analysis that daily, weekly and monthly.
                            <br/>
                            You can use the left menu for switch.</p>
                        <hr/>
                        <p>Developed with <strong>React</strong> and <strong>Java Spring Boot</strong> and We have been developing.</p>
                        <figcaption className="blockquote-footer">
                            Expense Tracker has continuing to developing. Currently version
                            is <strong>v0.1.0</strong>
                        </figcaption>
                    </Alert>

                </Row>
            </div>
        );
    }
}

export default DashboardHome;
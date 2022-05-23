import React, {Component} from 'react';
import {Footer} from "antd/es/layout/layout";

class DashboardFooter extends Component {
    render() {
        return (
            <div>

                <Footer style={{textAlign: 'center'}}>
                    Expense Tracker © 2022 Created by Ankist Software
                </Footer>

            </div>
        );
    }
}

export default DashboardFooter;
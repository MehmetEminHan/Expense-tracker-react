import React, {Component} from 'react';
import {Drawer, Menu} from "antd";
import {Link} from "react-router-dom";

class DashboardSidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fix: "fixed",
            mar: 0,
            collapsed: false,
            placement: "left",
        }

    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    getMenu = () => {
        return (
            <Menu mode="inline" defaultSelectedKeys={['4']}>

                <Menu.Item>
                    <Link to="/">Homepage</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/Expenses">Expenses</Link>
                </Menu.Item>
                <Menu.Item>
                    Item
                </Menu.Item>
                <Menu.Item>
                    Item
                </Menu.Item>
                <Menu.Item>
                    Item
                </Menu.Item>
                <Menu.Item>
                    Item
                </Menu.Item>
                <Menu.Item>
                    Item
                </Menu.Item>

            </Menu>
        );
    }

    render() {
        return (
            <div>

                <Drawer title="Menu"
                        placement={this.state.placement}
                        width={250}
                        onClose={this.props.onClose}
                        visible={this.props.visible}>

                    {this.getMenu()}

                </Drawer>


            </div>
        );
    }
}

export default DashboardSidebar;
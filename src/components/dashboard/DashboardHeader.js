import React, {Component} from 'react';
import {Button, Layout} from "antd";
import {MenuOutlined} from "@ant-design/icons";

const {Header} = Layout;

class DashboardHeader extends Component {
    render() {
        return (
            <div>
                <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}
                        className="site-layout-background">
                    <div className="trigger" style={{color: "white", cursor: "pointer"}}>

                        <Button onClick={this.props.showDrawer} type="primary" icon={<MenuOutlined/>} size="large"/>

                    </div>
                </Header>
            </div>
        );
    }
}

export default DashboardHeader;
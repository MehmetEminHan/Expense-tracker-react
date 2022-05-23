import React, {Component} from 'react';
import {Layout} from 'antd';
import {Route, Routes} from "react-router-dom";
import {MenuUnfoldOutlined} from "@ant-design/icons";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardFooter from "./DashboardFooter";
import DashboardHome from "./DashboardHome";
import ViewExpenses from "./ViewExpenses";

const {Header, Content, Footer, Sider} = Layout;

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fix: "fixed",
            mar: 0,
            collapsed: false,
            placement: "left",
            visible: false,
            sidebarCollapseIcon: <MenuUnfoldOutlined/>
        }

    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    showDrawer = () => {
        this.setState({visible: true});
    };

    onClose = () => {
        this.setState({visible: false});
    };

    render() {
        return (
            <div>
                <Layout>

                    <DashboardSidebar visible={this.state.visible} onClose={this.onClose}/>

                    <Layout className="site-layout" style={{marginLeft: 0}}>

                        <DashboardHeader showDrawer={this.showDrawer}/>

                        <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                            <div className="site-layout-background" style={{padding: 24, textAlign: 'center',}}>

                                <Routes>
                                    <Route path="/" element={<DashboardHome/>}/>
                                    <Route path="/Expenses" element={<ViewExpenses/>}/>
                                </Routes>

                            </div>
                        </Content>

                        <DashboardFooter/>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default Dashboard;
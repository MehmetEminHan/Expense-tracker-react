import React, {Component} from 'react';
import SideNav, {NavIcon, NavItem, NavText} from '@trendmicro/react-sidenav';
import {BarChartLineFill, HouseFill, Speedometer} from "react-bootstrap-icons";
import {Link} from "react-router-dom";

class SliderNavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        }
    }


    render() {

        return (
            <div>
                <SideNav
                    style={{backgroundColor: "#222831", position: "fixed"}}
                    expanded={this.state.expanded}
                    onToggle={(expanded) => {
                        this.setState({expanded});
                    }}>

                    <SideNav.Toggle/>
                    <SideNav.Nav>
                        <NavItem>
                            <Link to="/Dashboard">
                                <NavItem>
                                    <NavIcon>
                                        <HouseFill/>
                                    </NavIcon>
                                    <NavText>
                                        Home
                                    </NavText>
                                </NavItem>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/Dashboard/Expense">
                                <NavItem>

                                    <NavIcon>
                                        <BarChartLineFill/>
                                    </NavIcon>
                                    <NavText>
                                        Expense
                                    </NavText>
                                </NavItem>
                            </Link>
                        </NavItem>
                        <NavItem eventKey="charts">
                            <NavIcon>
                                <Speedometer/>
                            </NavIcon>
                            <NavText>
                                Charts
                            </NavText>
                            <NavItem eventKey="charts/linechart">
                                <NavText>
                                    Line Chart
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="charts/barchart">
                                <NavText>
                                    Bar Chart
                                </NavText>
                            </NavItem>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </div>
        );
    }
}

export default SliderNavBar;
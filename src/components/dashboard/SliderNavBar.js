import React, {Component} from 'react';
import {Menu, MenuItem, ProSidebar, SidebarHeader, SubMenu} from "react-pro-sidebar";
import {Gem, Speedometer} from "react-bootstrap-icons";

class SliderNavBar extends Component {

    constructor(props) {
        super(props);

    }


    render() {

        return (
            <div>
                <ProSidebar>
                    <SidebarHeader>
                        Demo
                    </SidebarHeader>
                    <Menu iconShape="square">
                        <MenuItem icon={<Speedometer/>}>Dashboard</MenuItem>
                        <SubMenu title="Components" icon={<Gem/>}>
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>



                    </Menu>

                </ProSidebar>
            </div>
        );
    }
}

export default SliderNavBar;
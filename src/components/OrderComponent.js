import React, { Component }  from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
//import {  } from 'reactstrap';

class Order extends Component {

    render() {
        return (
            <Tabs vertical>
                <TabList>
                    <Tab>Starters</Tab>
                    <Tab>Salads</Tab>
                    <Tab>Specialty Pizza</Tab>
                    <Tab>Build Your Own Pizza</Tab>
                </TabList>

                <TabPanel>
                    <h2>Starters Go Here</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Salads Go Here</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Specialty Pizzas Go Here</h2>
                </TabPanel>
                <TabPanel>
                    <h2>BYOs Go Here</h2>
                </TabPanel>
            </Tabs>
        );
    }
}       
export default Order; 
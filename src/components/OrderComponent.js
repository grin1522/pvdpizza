import React, { Component }  from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Card, CardImg, CardText, CardBody, Button } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { STARTERS } from '../shared/starters';
import { SALADS } from '../shared/salads';

class Order extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        };

        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    /* handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.campsiteId, values.rating, values.author, values.text);
    } */

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md m-1">
                        <Tabs vertical>
                            <TabList className="rounded pb-1" style={{backgroundColor: "#252729"}}>
                                <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Starters</Tab>
                                <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Salads</Tab>
                                <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Specialty Pizza</Tab>
                                <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Build Your Own Pizza</Tab>
                            </TabList>

                            <TabPanel>
                                <Tabs vertical>
                                    <TabList className="rounded pb-1" style={{backgroundColor: "#252729"}}>
                                        <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Mozz Sticks</Tab>
                                        <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Calamari</Tab>
                                        <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Stuffed Quahog</Tab>
                                        <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Buffalo Hot Wings</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <Card>
                                            <CardBody>
                                                <CardText className="card-text">{STARTERS[0].description}</CardText>
                                                <Button type="submit" value="submit" color="primary">Add to Cart</Button> 
                                            </CardBody>
                                        </Card>
                                    </TabPanel>
                                    <TabPanel>
                                        <Card>
                                            <CardBody>
                                                <CardText className="card-text">{STARTERS[1].description}</CardText>
                                                <Button type="submit" value="submit" color="primary">Add to Cart</Button>
                                            </CardBody>
                                        </Card>
                                    </TabPanel>
                                    <TabPanel>
                                        <Card>
                                            <CardBody>
                                                <CardText className="card-text">{STARTERS[2].description}</CardText>
                                                <Button type="submit" value="submit" color="primary">Add to Cart</Button>
                                            </CardBody>
                                        </Card>
                                    </TabPanel>
                                    <TabPanel>
                                        <Card>
                                            <CardBody>
                                                <CardText className="card-text">{STARTERS[3].description}</CardText>
                                                <Button type="submit" value="submit" color="primary">Add to Cart</Button>
                                            </CardBody>
                                        </Card>
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                            <TabPanel>
                                <Tabs vertical>
                                    <TabList className="rounded pb-1" style={{backgroundColor: "#252729"}}>
                                        <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Mozz Sticks</Tab>
                                        <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Calamari</Tab>
                                        <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Stuffed Quahog</Tab>
                                        <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Buffalo Hot Wings</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <Card>
                                            <CardBody>
                                                <CardText className="card-text">{STARTERS[0].description}</CardText>
                                                <Button type="submit" value="submit" color="primary">Add to Cart</Button> 
                                            </CardBody>
                                        </Card>
                                    </TabPanel>
                                    <TabPanel>
                                        <Card>
                                            <CardBody>
                                                <CardText className="card-text">{STARTERS[1].description}</CardText>
                                                <Button type="submit" value="submit" color="primary">Add to Cart</Button>
                                            </CardBody>
                                        </Card>
                                    </TabPanel>
                                    <TabPanel>
                                        <Card>
                                            <CardBody>
                                                <CardText className="card-text">{STARTERS[2].description}</CardText>
                                                <Button type="submit" value="submit" color="primary">Add to Cart</Button>
                                            </CardBody>
                                        </Card>
                                    </TabPanel>
                                    <TabPanel>
                                        <Card>
                                            <CardBody>
                                                <CardText className="card-text">{STARTERS[3].description}</CardText>
                                                <Button type="submit" value="submit" color="primary">Add to Cart</Button>
                                            </CardBody>
                                        </Card>
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                            <TabPanel>
                                <Tabs vertical>
                                    <TabList className="rounded pb-1" style={{backgroundColor: "#252729"}}>
                                        <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Mozz Sticks</Tab>
                                        <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Calamari</Tab>
                                        <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Stuffed Quahog</Tab>
                                        <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Buffalo Hot Wings</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <Card>
                                            <CardBody>
                                                <CardText className="card-text">{STARTERS[0].description}</CardText>
                                                <Button type="submit" value="submit" color="primary">Add to Cart</Button> 
                                            </CardBody>
                                        </Card>
                                    </TabPanel>
                                    <TabPanel>
                                        <Card>
                                            <CardBody>
                                                <CardText className="card-text">{STARTERS[1].description}</CardText>
                                                <Button type="submit" value="submit" color="primary">Add to Cart</Button>
                                            </CardBody>
                                        </Card>
                                    </TabPanel>
                                    <TabPanel>
                                        <Card>
                                            <CardBody>
                                                <CardText className="card-text">{STARTERS[2].description}</CardText>
                                                <Button type="submit" value="submit" color="primary">Add to Cart</Button>
                                            </CardBody>
                                        </Card>
                                    </TabPanel>
                                    <TabPanel>
                                        <Card>
                                            <CardBody>
                                                <CardText className="card-text">{STARTERS[3].description}</CardText>
                                                <Button type="submit" value="submit" color="primary">Add to Cart</Button>
                                            </CardBody>
                                        </Card>
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                            <TabPanel>
                                <Tabs vertical>
                                    <TabList className="rounded pb-1" style={{backgroundColor: "#252729"}}>
                                        <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Mozz Sticks</Tab>
                                        <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Calamari</Tab>
                                        <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Stuffed Quahog</Tab>
                                        <Tab style={{color: "whitesmoke", backgroundColor: "#252729"}}>Buffalo Hot Wings</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <Card>
                                            <CardBody>
                                                <CardText className="card-text">{STARTERS[0].description}</CardText>
                                                <Button type="submit" value="submit" color="primary">Add to Cart</Button> 
                                            </CardBody>
                                        </Card>
                                    </TabPanel>
                                    <TabPanel>
                                        <Card>
                                            <CardBody>
                                                <CardText className="card-text">{STARTERS[1].description}</CardText>
                                                <Button type="submit" value="submit" color="primary">Add to Cart</Button>
                                            </CardBody>
                                        </Card>
                                    </TabPanel>
                                    <TabPanel>
                                        <Card>
                                            <CardBody>
                                                <CardText className="card-text">{STARTERS[2].description}</CardText>
                                                <Button type="submit" value="submit" color="primary">Add to Cart</Button>
                                            </CardBody>
                                        </Card>
                                    </TabPanel>
                                    <TabPanel>
                                        <Card>
                                            <CardBody>
                                                <CardText className="card-text">{STARTERS[3].description}</CardText>
                                                <Button type="submit" value="submit" color="primary">Add to Cart</Button>
                                            </CardBody>
                                        </Card>
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}       
export default Order; 
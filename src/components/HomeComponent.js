import React from 'react';
import { Table } from 'reactstrap';

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <Table dark>
                        <thead>
                            <tr>
                                <th className="TableHeader" colSpan="4">DAILY SPECIALS AND EVENTS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Monday: </th>
                                <td>Purchase one regular size pizza and get a second for half price</td>
                            </tr>
                            <tr>
                                <th scope="row">Tuesday: </th>
                                <td>Taco pizza, 5 dollar margaritas, and live mariachi music</td>
                            </tr>
                            <tr>
                                <th scope="row">Wednesday: </th>
                                <td>Two slices for the price of one</td>
                            </tr>
                            <tr>
                                <th scope="row">Thursday: </th>
                                <td>5 dollar martinis and karaoke</td>
                            </tr>
                            <tr>
                                <th scope="row">Friday: </th>
                                <td>20 percent off wings, and trivia from 8PM - 10PM</td>
                            </tr>
                            <tr>
                                <th scope="row">Saturday: </th>
                                <td>Purchase one regular size pizza and get a free salad of your choice</td>
                            </tr>
                            <tr>
                                <th scope="row">Sunday: </th>
                                <td>FREE DRAFT BEER with purchase of any regular size pizza<br/>Open turntables from 5PM - 9PM, bring your records!</td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default Home; 
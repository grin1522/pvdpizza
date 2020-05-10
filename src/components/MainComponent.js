import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchAboutInfo } from '../redux/ActionCreators';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import AboutUs from './AboutComponent';
import AboutInfo from './AboutInfoComponent.js';
import Order from './OrderComponent';
import Cart from './CartComponent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        aboutInfo: state.aboutInfo
    };
};

const mapDispatchToProps = {
    
    fetchAboutInfo: () => (fetchAboutInfo())
};

class Main extends Component {

    componentDidMount() {
        this.props.fetchAboutInfo();
    }
    
    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }

        const AboutInfoWithId = ({match}) => {
            return (
                <AboutInfo 
                    info={this.props.aboutInfo.aboutInfo.filter(info => info.id === +match.params.infoID)[0]}
                    isLoading={this.props.aboutInfo.isLoading}
                    errMess={this.props.aboutInfo.errMess}
                />                           
            );
        };

        const MyCart = () => {
            return (
                <Cart />
            );
        }

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/aboutUs' render={() => <AboutUs aboutInfo={this.props.aboutInfo} />} />
                            <Route path='/aboutUs/:infoID' component={AboutInfoWithId} />
                            <Route exact path='/order' render={() => <Order pizza={this.props.pizza} salads={this.props.salads} starters={this.props.starters} toppings={this.props.toppings} />} />
                            <Route exact path='/mycart' component={MyCart} />
                            <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderInfo({info}) {
    return (
        <div className="col-md-5 m-1">
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg top src={baseUrl + info.image} alt={info.name} />
                    <CardBody>
                        <CardText>{info.text}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>
    );
}

function AboutInfo(props) {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    if (props.info) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/aboutUs">About Us</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.info.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.info.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <RenderInfo info={props.info} />
                </div>
            </div>
        );
    }
    return <div />
}

export default AboutInfo;
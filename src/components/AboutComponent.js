import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


function RenderAboutItem({ info }) {
    return(
        <Card>
            <Link to={`/aboutUs/${info.id}`}>
                <CardImg width="100%" src={baseUrl + info.image} alt={info.name} />
                <CardImgOverlay className="text-center">
                    <CardTitle>{info.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>

    );
}

const AboutUs = (props) => {
    const aboutUs = props.aboutInfo.aboutInfo.map(info => {
        return (
            <div key={info.id} className="col-12 col-md-5 m-1">
                <RenderAboutItem info ={info}/>
            </div>
        );
    });

    if (props.aboutInfo.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        );
    } else if (props.aboutInfo.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h5>{props.aboutInfo.errMess}</h5>
                </div>
            </div>
        );
    } else {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12 text-center">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {aboutUs}
            </div>
        </div>
    );
}
}
export default AboutUs
import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
            <div className="row text-center text-align-center">             
                <div className="col-sm-3">
                    <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/menu'>Menu</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                        </ul>
                </div>
                <div class="col-sm-5">
                    <h5>Contact</h5>
                    <a role="button" className="btn btn-link" href="tel:+14014937777"><i className="fa fa-phone" /> (401) 493-7777</a>
                    <a role="button" className="btn btn-link" href="mailto:pvdpizzaco@hotmail.com"><i className="fa fa-envelope-o" /> pvdpizzaco@hotmail.com</a><br />
                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                    <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                    <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                </div>
                <div class="col-sm-4">
                    <h5>Hours</h5>
                    Sunday - Thursday: 10AM - 10PM<br/>
                    Friday - Saturday: 10AM - 12PM
                </div>                
           </div>
        </div>
        </footer>
    )
}

export default Footer;
import React from 'react';
import './footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
    return (

        <>
         
            <footer className="footer-distributed">
                <div className="footer-left">
                    <Link to='/'>
                        <img src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/logo-regular.png" alt="" />
                    </Link>
                    <p className="footer-links">
                        <Link to='/' className="link-1">Home</Link>
                        <Link to='/shop'>Shop All</Link>
                        <Link to='/electric'>Electric Scooter</Link>
                        <Link to='/Accessonries'>Accessonries</Link>
                        <Link to='/Contact'>Contact</Link>
                    </p>
                    <p className="footer-company-name">Copyright © 2023 Electric Scooter | Powered by Electric Scooter</p>
                </div>
                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker" />
                        <p>
                            Azerbaycan Respublikasi - Baku
                        </p>
                    </div>
                    <div>
                        <i className="fa fa-phone" />
                        <p>+99451-760-03-00</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope" />
                        <p>
                            <a href="mailto:asadof28@gmail.com">asadof28@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the company</span>
                        Scooterların Satişları buradadır,Biz 1990-cı ilden fealiyet gosderirik.
                    </p>
                    <div className="footer-icons">
                        <a href="#">

                        </a>
                        <a href="#">
                            <i className="fa fa-twitter" />
                        </a>
                        <a href="#">
                            <i className="fa fa-linkedin" />
                        </a>
                        <a href="#">
                            <i className="fa fa-github" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer
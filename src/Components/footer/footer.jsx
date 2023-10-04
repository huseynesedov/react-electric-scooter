import React from 'react';
import './footer.css'
import { FaWhatsapp, FaInstagramSquare,FaGithub } from 'react-icons/fa';
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
                        <Link to="tel:+994517600300">
                        <i className="fa fa-phone" />
                        <p>+99451-760-03-00</p>
                        </Link>
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
                        <Link to="https://www.instagram.com/huseyyn005/">
                            <FaInstagramSquare />
                        </Link>
                        <Link to="https://wa.me/+994517600300">
                            <FaWhatsapp />
                        </Link>
                        <Link to="https://github.com/huseynesedov">
                            <FaGithub/>
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer
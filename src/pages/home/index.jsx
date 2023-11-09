import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBox, faEye, faTruckFast, faMapLocationDot, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { FaWhatsapp, FaInstagramSquare, FaGithub } from 'react-icons/fa';

import Navbar from '../../Components/nav/nav';
import Footer from '../../Components/footer/footer';

import './index.css'
function Home() {

    const [todos, setTodos] = useState({});
    const [todos2, setTodos2] = useState({});

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(`https://scooter-api.vercel.app/home`);
                setTodos(response.data)
            } catch (err) {
            }

        };
        fetchTodos();

    }, []);
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(`https://scooter-api.vercel.app/home2`);
                setTodos2(response.data)
            } catch (err) {
            }

        };
        fetchTodos();
    }, []);

    return (
        <>
            {/* 
        ----------------------
        web site title section 
        ----------------------
      */}

            <Helmet>
                <meta charSet="utf-8" />
                <title>Electric scooter</title>
                <link rel="canonical" href="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/scooter-02.png" />
            </Helmet>

            {/* 
        ----------------------
                NAVBAR
        ----------------------
      */}

            <Navbar></Navbar>
      
                {/*     
      ==========================================================
          
                            M A I N 1 
          
      ==========================================================               
          
      */}
            <header className="header header-r">
                <div className="centermain centermain-r">


                    <div className="left-1 left-1-r" data-aos="fade-left" data-aos-duration={1000}>
                        <div className="texts">
                            <h2 data-aos="fade-left" data-aos-duration={1000}>Libero X250</h2>
                            <h4>250 Watt Electric Scooter</h4>
                            <h5 data-aos="fade-down" data-aos-duration={1000}>Informations:</h5>
                        </div>
                        <div className="spanmain spanmain-r" data-aos="fade-right" data-aos-duration={1000}>
                            <span className="span-1-r span-1">
                                <h4>
                                    <div className="km km-r">30 km</div>
                                </h4>
                                <h3>BATTERY</h3>
                            </span>
                            <span className="span-1-r span-1 span-2">
                                <h4>
                                    <div className="km-r km">13.5 KG</div>
                                </h4>
                                <h3>WEIGHT</h3>
                            </span>
                            <span className="span-1-r span-1 span-3">
                                <h4>
                                    <div className="km-r km">25 km/h</div>
                                </h4>
                                <h3>SPEED</h3>
                            </span>
                        </div>
                        {todos2.length > 0 ?

                            todos2.map((todo) => (

                                <div>
                                    <div className="asagi asagi-r" key={todo.id}>
                                        <h3>$750.00</h3>
                                        <Link to={`/Detail/${todo.id}`}>

                                            <button className="button button-r">ADD TO CART</button>
                                        </Link>
                                    </div>
                                </div>
                            )) : null
                        }
                    </div>
                    <div className="center-1 center-1-r" data-aos="fade-up" data-aos-duration={1000}>
                        <img
                            className="img img-r"
                            src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/scooter-01.png"
                            alt=""
                        />
                    </div>
                    <div className="right-1 right-1-r" data-aos="fade-right" data-aos-duration={1000}>
                        <div className="righttop righttop-r">
                            <h2 d>Description</h2>
                            <p>
                                The Fully Loaded Libero x250 is a High <br /> Performance,
                                Extremely Durable, High <br /> Speed, Lightweight Electric Scooter with
                                a{" "}
                                <br /> Huge Battery
                            </p>
                        </div>
                        <div className="rightbottom rightbottom-r">
                            <h2>SHARE:</h2>
                            <div>
                                <Link to="https://www.instagram.com/huseyyn005/">
                                    <span data-aos="fade-right" data-aos-duration={1000}>
                                        <FaInstagramSquare />
                                    </span>
                                </Link>
                                <Link to="https://wa.me/+994517600300">
                                    <span data-aos="fade-up" data-aos-duration={1000}>
                                        <FaWhatsapp />
                                    </span>
                                </Link>
                                <Link to="https://github.com/huseynesedov">
                                    <span data-aos="fade-down" data-aos-duration={1000}>
                                        <FaGithub />
                                    </span>
                                </Link>


                            </div>
                        </div>
                    </div>
                </div>
            </header>
                 {/*     
      ==========================================================
          
                                 M A I N 2 
          
      ==========================================================               
          
      */}
            <main className="main2">
                <div className="centermain-2">
                    {todos.length > 0 ?

                        todos.map((todo) => (

                            <div className="cart-shop" key={todo.id} data-aos="fade-up" data-aos-duration={1000}>
                                <Link to={`/Detail/${todo.id}`}>
                                    <div className="orderimage">
                                        <img src={todo.src} alt={todo.title} />
                                        <div className="eyes baskets">
                                            <div>
                                                <FontAwesomeIcon className="fa-solid fa-basket-shopping" icon={faBox} />
                                                <div className="icon-title">Add To Cart</div>
                                            </div>
                                            <div>
                                                <FontAwesomeIcon icon={faEye} />
                                                <div className="icon-title">Quick view</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-left">
                                        <div className="star">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <h3>{todo.title}</h3>
                                        <div className="bottom-left-bottom">
                                            <p><del>{todo.del}</del></p>
                                            <h2>{todo.price}</h2>
                                        </div>
                                    </div>
                                </Link>
                            </div >

                        )) : null
                    }
                </div>
            </main>
            {/*     
      ==========================================================
          
                            M A I N 3 
          
      ==========================================================               
          
      */}
            <main className="main3 main3-r">
                <span className="line line-r" />
                <h6 data-aos="flip-up">ABOUT US</h6>
                <h2 data-aos="zoom-out-up">
                    If you’re looking for a brand <br /> new electric scooter, you’re in{" "}
                    <br /> the right place
                </h2>
                <p data-aos="zoom-out-down">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Quis <br /> ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                    lacus vel facilisis.
                </p>
            </main>
            {/*     
      ==========================================================
          
                            M A I N 4 
          
      ==========================================================               
          
      */}
            <main className="main4 main4-r" />
            {/*     
      ==========================================================
          
                           M A I N 5 
          
      ==========================================================               
          
      */}
            <main className="main5 main5-r">
                <div className="cart-shop-2 cart-shop-2-r">
                    <img
                        className="img img-r"
                        src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/scooter-02.png"
                        alt=""
                    />
                    <p className="city city-r">CITY</p>
                    <a className="a a-r" href="#">
                        <h3 className="h3 h3-r "> Electric Scooter Z400 </h3>
                    </a>
                    <p className="sale sale-r">$650</p>
                </div>
                <div className="centermain-3 centermain-3-r">
                    <i aria-hidden="true" className="fas fa-quote-right" />
                    <h2 className="h2 h2-r" data-aos="zoom-out-left">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                        suspendisse ultrices gravida. Risus commodo viverra maecenas.”
                    </h2>
                    <img
                        className="img-2 img-2-r" data-aos="zoom-out-right"
                        src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/signature-01.png"
                        alt=""
                    />
                    <p className="p p-r" data-aos="zoom-out-right">MARIA OLIVER</p>
                </div>
            </main>
            <main className="main7">
                <span className="line" />
                <h2>Why choose us</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do
                    eiusmod tempor incididunt ut labore.
                </p>
                <div className="centermain-5">
                    <div
                        className="divs divs2"
                        data-aos="fade-right"
                        data-aos-duration={1000}
                    >
                        <a href="#">
                            <span>
                                <FontAwesomeIcon icon={faTruckFast} />
                            </span>
                            <h2>Fast Delivery</h2>
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet, adipiscing <br /> elit, sed do eiusmod
                            tempor consectetur <br /> incididunt ut labore
                        </p>
                    </div>
                    <div className="divs" data-aos="fade-up" data-aos-duration={1000}>
                        <a href="#">
                            <span>
                                <FontAwesomeIcon icon={faMapLocationDot} />
                            </span>
                            <h2>Order Tracking</h2>
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet, adipiscing <br /> elit, sed do eiusmod
                            tempor consectetur <br /> incididunt ut labore
                        </p>
                    </div>
                    <div className="divs" data-aos="fade-left" data-aos-duration={1000}>
                        <a href="#">
                            <span>
                                <FontAwesomeIcon icon={faShieldHalved} />
                            </span>
                            <h2>Secure Payment</h2>
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet, adipiscing <br /> elit, sed do eiusmod
                            tempor consectetur <br /> incididunt ut labore
                        </p>
                    </div>
                </div>
            </main>
                 {/*     
      ==========================================================
          
                    M A I N 8 
          
      ==========================================================               
          
      */}
            <main className="main8">
                <div className="centermain-6">
                    <div>
                        <h3>$650</h3>
                        <h2>SilverPath Y100</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                            suspendisse ultrices gravida.
                        </p>
                        <a href="#">
                            {" "}
                            <button>SHOP NOW</button>
                        </a>
                    </div>
                </div>
            </main>
            {/*     
      ==========================================================
          
                    Footer
          
      ==========================================================               
          
      */}
            <Footer></Footer>
        </ >
    );
}

export default Home;

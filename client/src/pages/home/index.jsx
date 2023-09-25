import React from 'react';
import { Helmet } from "react-helmet";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBox, faEye, faTruckFast, faMapLocationDot, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../../Components/nav/nav';
import Footer from '../../Components/footer/footer';

import './index.css'
function Home() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Electric scooter</title>
                <link rel="canonical" href="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/scooter-02.png" />
            </Helmet>
            <Navbar></Navbar>
            <header className="header header-r">
                <div className="centermain centermain-r">
                    <div className="left-1 left-1-r">
                        <div className="texts">
                            <h2>Libero X250</h2>
                            <h4>250 Watt Electric Scooter</h4>
                            <h5>Informations:</h5>
                        </div>
                        <div className="spanmain spanmain-r">
                            <span className="span-1-r span-1">
                                <h4>
                                    <div className="km km-r">30 km</div>
                                </h4>
                                <h3>BATTERY</h3>
                            </span>
                            <span className="span-1-r span-1">
                                <h4>
                                    <div className="km-r km">13.5 KG</div>
                                </h4>
                                <h3>WEIGHT</h3>
                            </span>
                            <span className="span-1-r span-1">
                                <h4>
                                    <div className="km-r km">25 km/h</div>
                                </h4>
                                <h3>SPEED</h3>
                            </span>
                        </div>
                        <div>
                            <div className="asagi asagi-r">
                                <h3>$750.00</h3>
                                <button className="button button-r">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                    <div className="center-1 center-1-r">
                        <img
                            className="img img-r"
                            src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/scooter-01.png"
                            alt=""
                        />
                    </div>
                    <div className="right-1 right-1-r">
                        <div className="righttop righttop-r">
                            <h2>Description</h2>
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
                                <a href="#">
                                    <span>
                                        {/* <FontAwesomeIcon icon={faWhatsapp} /> */}

                                    </span>
                                </a>
                                <a href="https://wa.me/qr/GNC6QCTHJCQHH1">
                                    <span>
                                        {/* <FontAwesomeIcon icon={faWhatsapp} /> */}
                                    </span>
                                </a>
                                <a href="#">
                                    <span>
                                        {/* <FontAwesomeIcon icon={faWhatsapp} /> */}

                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="main2">
                <div className="centermain-2">
                    <div className="cart-shop">
                        <a href="#">
                            <div className="orderimage">
                                <img
                                    src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-03-a-400x525.jpg"
                                    alt=""
                                />
                                <div className="eyes baskets">
                                    <div>
                                        <FontAwesomeIcon className="fa-solid fa-basket-shopping" icon={faBox} />

                                        <div className="icon-title">Add To Cart</div>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faEye} />
                                        <div className="icon-title">Qucik view</div>
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
                                <h3>Libero X350</h3>
                                <div className="bottom-left-bottom">
                                    <p>
                                        <del>$875.00</del>
                                    </p>
                                    <h2>$799.00</h2>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="cart-shop">
                        <a href="#">
                            <div className="orderimage">
                                <img
                                    src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-04-a-400x525.jpg"
                                    alt=""
                                />
                                <div className="eyes baskets">
                                    <div>
                                        <FontAwesomeIcon className="fa-solid fa-basket-shopping" icon={faBox} />

                                        <div className="icon-title">Add To Cart</div>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faEye} />

                                        <div className="icon-title">Qucik view</div>
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
                                <h3>Practico S2 Exclusive</h3>
                                <div className="bottom-left-bottom">
                                    <p>
                                        <del>$750.00</del>
                                    </p>
                                    <h2>$600.00</h2>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="cart-shop">
                        <a href="#">
                            <div className="orderimage">
                                <img
                                    src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-15-a-400x525.jpg"
                                    alt=""
                                />
                                <div className="eyes baskets">
                                    <div>
                                        <FontAwesomeIcon className="fa-solid fa-basket-shopping" icon={faBox} />

                                        <div className="icon-title">Add To Cart</div>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faEye} />

                                        <div className="icon-title">Qucik view</div>
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
                                <h3>U-Lock Force MAX</h3>
                                <div className="bottom-left-bottom">
                                    <p>
                                        <del>$90.00</del>
                                    </p>
                                    <h2>$75.00</h2>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="cart-shop">
                        <a href="#">
                            <div className="orderimage">
                                <img
                                    src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-16-a-400x525.jpg"
                                    alt=""
                                />
                                <div className="eyes baskets">
                                    <div>
                                        <FontAwesomeIcon className="fa-solid fa-basket-shopping" icon={faBox} />

                                        <div className="icon-title">Add To Cart</div>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faEye} />

                                        <div className="icon-title">Qucik view</div>
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
                                <h3>Unbeatable Lock 100</h3>
                                <div className="bottom-left-bottom">
                                    <p>
                                        <del>$80.00</del>
                                    </p>
                                    <h2>$69.00</h2>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </main>
            {/*     
      ==========================================================
          
                    M A I N 3 
          
      ==========================================================               
          
      */}
            <main className="main3 main3-r">
                <span className="line line-r" />
                <h6>ABOUT US</h6>
                <h2>
                    If you’re looking for a brand <br /> new electric scooter, you’re in{" "}
                    <br /> the right place
                </h2>
                <p>
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
                    <h2 className="h2 h2-r">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                        suspendisse ultrices gravida. Risus commodo viverra maecenas.”
                    </h2>
                    <img
                        className="img-2 img-2-r"
                        src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/signature-01.png"
                        alt=""
                    />
                    <p className="p p-r">MARIA OLIVER</p>
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
            <Footer></Footer>
        </div>
    );
}

export default Home;

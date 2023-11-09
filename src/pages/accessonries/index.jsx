import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBox, faEye, faFilter } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../../Components/nav/nav';
import Footer from '../../Components/footer/footer';

import "../electric-scooter/style.css"

function Accessonries() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('https://scooter-api.vercel.app/accessonries');
                setTodos(response.data)

            } catch (err) {
                console.log(err);
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
                <title>Accessonries Archives | Electric scooter</title>
                <link rel="canonical" href="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/scooter-02.png" />
            </Helmet>
            {/* NavBar */}
            <Navbar></Navbar>
            <div className="filter">
                <div>
                    <p>Home / Accessonires</p>
                    <p className="p">
                        Showing 1-12 of 18 results{" "}
                        <a href="" className="none">
                            <FontAwesomeIcon className='filters' icon={faFilter} />Filter
                        </a>
                    </p>
                </div>
                <div>
                    <select className="orderby">
                        <option defaultValue="menu_order" selected="selected">
                            Default sorting
                        </option>
                        <option defaultValue="popularity">Sort by popularity</option>
                        <option defaultValue="rating">Sort by average rating</option>
                        <option defaultValue="date">Sort by latest</option>
                        <option defaultValue="price">Sort by price: low to high</option>
                        <option defaultValue="price-desc">Sort by price: high to low</option>
                    </select>
                </div>
            </div>

            {/* Accessonriess ALL */}
            <section id="shop">
                {todos.length > 0 ?

                    todos.map((todo) => (

                        <div className="cart-shop" key={todo.id}>
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


            </section>
            <Footer></Footer>
        </>
    );
}

export default Accessonries


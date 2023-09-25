import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Helmet } from "react-helmet";
import axios from 'axios';

import Navbar from '../../Components/nav/nav';
import Footer from '../../Components/footer/footer';

import { Link, useParams } from 'react-router-dom';

import './style.css'
function Detail() {
    const { id } = useParams()
    const [todos, setTodos] = useState({});

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/data/${id}`);
                setTodos(response.data)
                console.log(response.data);

            } catch (err) {
                console.log(err);
            }

        };
        fetchTodos();
    }, []);



    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Detail | Electric scooter</title>
                <link rel="canonical" href="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/scooter-02.png" />
            </Helmet>


            <Navbar></Navbar>

            <section id="detail">
                <div className="centermain1">
                    <div className="sol1">

                        <AliceCarousel>
                            <img src={todos.src} className="yours-custom-class img" />
                            <img src={todos.src2} className="yours-custom-class img" />
                            <img src={todos.src3} className="yours-custom-class img" />
                            <img src={todos.src4} className="yours-custom-class img" />
                        </AliceCarousel>




                    </div>
                    <div className="sag1">
                        <Link to="/electric" className='scooter'>Electric Scooters</Link>

                        <h3 className='h3'>{todos.title}</h3>
                        <div>
                            <p className='p'><del>{todos.del}</del></p>

                            <h2 className='h2'>{todos.price}</h2><span className='h2-span'>& Free Shipping</span>
                        </div>
                        <span className='content'>{todos.content}</span>
                        <hr className='hr' />

                        <h2 className='h2'>{todos.price}</h2>
                        <div className='add'>

                            <a href="" className="minus">
                                -
                            </a>
                            <input
                                type="input"
                                id="quantity_64fb73ac4297a"
                                className="input-number"
                                name="cart[8a0e1141fd37fa5b98d5bb769ba1a7cc][qty]"
                                defaultValue={1}
                                aria-label="Product quantity"
                                size={4}
                                min={0}
                                max=""
                                step={1}
                                placeholder=""
                                inputMode="numeric"
                                autoComplete="off"
                            />
                            <a href="" className="plus">
                                +
                            </a>

                            <button className="button button-r">ADD TO CART</button>

                        </div>

                    </div>
                </div>
            </section>




            <Footer></Footer>
        </>


    )
}

export default Detail
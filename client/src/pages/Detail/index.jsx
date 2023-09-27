import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Helmet } from "react-helmet";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import Navbar from '../../Components/nav/nav';
import Footer from '../../Components/footer/footer';

import debet from '../images/debet-cart.jpg'
import { TiTick } from 'react-icons/ti';
import './style.css'
function Detail() {
    const { id } = useParams()
    const [todos, setTodos] = useState({});

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/data/${id}`);
                setTodos(response.data)
            } catch (err) {
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
                        <div className="debet-cart">
                            <span className="p-debet">
                                <b>
                                    Guaranteed Safe Checkout
                                </b>
                            </span>
                            <img className='debet-img' src={debet} alt="" />
                        </div>
                        <div className="tick">
                            <div>

                                <TiTick /><span className="p-debet2">No-Risk Money Back Guarantee!</span>
                            </div>
                            <div>

                                <TiTick /><span className="p-debet2">No Hassle Refunds</span>
                            </div>
                            <div>

                                <TiTick /><span className="p-debet2">Secure Payments</span>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <main className="main-detail">
                <div className="main-detail-div">
                    <h2 className="h2-main-detail">

                        Description
                    </h2>
                    <h3 className='h3 mar'>{todos.title}</h3>
                    <span className='content mar'>{todos.content}</span>

                    <span className="content mar">Pellentesque magna arcu, lacinia sed mi non, pretium posuere eros. Mauris maximus imperdiet sem aliquam facilisis. Nam in sem at augue finibus vehicula eget quis sapien. Pellentesque malesuada ligula vel auctor facilisis. In condimentum mattis ornare.</span>
                </div>
            </main>



            <Footer></Footer>
        </>


    )
}

export default Detail
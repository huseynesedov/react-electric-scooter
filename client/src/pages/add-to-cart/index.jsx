import React from 'react';
import { Helmet } from "react-helmet";

import Navbar from '../../Components/nav/nav';
import Footer from '../../Components/footer/footer';

import { AiTwotoneDelete } from "react-icons/ai";
import './style.css'
function AddToCart() {

    return (

        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add To Cart | Electric scooter</title>
                <link rel="canonical" href="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/scooter-02.png" />
            </Helmet>
            <Navbar></Navbar>
            <main className="main1">
                <div className="opsi3">
                    <div className="sol">
                        <h3>Cart</h3>
                        <table className="table">
                            <thead>
                                <tr className="tr tr2">
                                    <td className='td' > </td>
                                    <td className='td'>Product</td>
                                    <td className='td'>price</td>
                                    <td className='td'>Quantity</td>
                                    <td className='td'>Subtotal</td>
                                    <td className='td'>Delete</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="main-tr">
                                    <td className="td-sag">
                                        <img
                                            className="img2"
                                            src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/product-17-a.jpg"
                                            alt=""
                                        />
                                    </td>
                                    <td className='ham'>Hammer Scooter Lock</td>
                                    <td class="td-sag price">16</td>
                                    <td className="td-sag">
                                        <div className="vote">
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
                                        </div>
                                    </td>
                                    <td className="td-sag dollar">
                                        750$
                                    </td>
                                    <td className="td-sag">

                                        <AiTwotoneDelete className='delete' />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="sag3">
                        <thead className='thead2 thead'>
                            <tr className="tr tr3">

                                <td className='td2'><b>Cart Totals</b></td>
                            </tr>
                            <div className='totals'>
                                <div>
                                    <p>Total: $450 </p>
                                </div>
                                <button className="button5">CHECKOUT</button>

                            </div>
                        </thead>
                    </div>

                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default AddToCart

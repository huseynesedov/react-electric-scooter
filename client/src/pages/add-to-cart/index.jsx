import React from 'react';
import { Helmet } from "react-helmet";

import Navbar from '../../Components/nav/nav';
import Footer from '../../Components/footer/footer';

import { AiTwotoneDelete } from "react-icons/ai";
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { AddTocart, RemoveFromCart } from '../../redux/actions/Cart.actions';
function AddToCart() {

    const cartList = useSelector(state => state.basket);
    const dispatch = useDispatch()
    const productAddToCart = (param) => {
        dispatch(AddTocart(param))
        console.log(param);
    }

    const productRemovefromCart = (param) => {
        dispatch(RemoveFromCart(param))
    }
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
                                {cartList.map(product => (
                                    <tr className="main-tr" key={product.id}>
                                        <td className="td-sag">
                                            <img
                                                className="img2"
                                                src={product.src}
                                                alt={product.title}
                                            />
                                        </td>
                                        <td className='ham'>{product.title}</td>
                                        <td class="td-sag price">{product.price}</td>
                                        <td className="td-sag">
                                            <div className="vote">
                                                <button className="minus" onClick={() => productRemovefromCart(product.id)}>
                                                    -
                                                </button>
                                                <span className="input-number">{product.quanty}</span>
                                                <button className="plus" onClick={() => productAddToCart(product)}>
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="td-sag dollar">
                                            750$
                                        </td>
                                        <td className="td-sag">
                                            <AiTwotoneDelete className='delete' />
                                        </td>
                                    </tr>
                                ))}

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

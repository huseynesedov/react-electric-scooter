import React from 'react';
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from 'react-redux';
import { AddTocart, RemoveFromCart,RemovesFromCart } from '../../redux/actions/Cart.actions';

import Navbar from '../../Components/nav/nav';
import Footer from '../../Components/footer/footer';

import { AiTwotoneDelete } from "react-icons/ai";
import './style.css'
function AddToCart() {

    const cartList = useSelector(state => state.basket);
    const dispatch = useDispatch()
    const productAddToCart = (param) => {
        dispatch(AddTocart(param))
    }

    const productRemovefromCart = (param) => {
        dispatch(RemoveFromCart(param))
    }
    const productRemovesfromCart = (product) => {
        dispatch(RemovesFromCart(product)); 
    }
    const calculateTotal = () => {
        let total = 0;
        cartList.forEach(product => {
            total += Number(product.price.slice(1)) * product.quanty;
        });
        return total.toFixed(2);
    }
    return (

        <>
        {/* 
        ----------------------
        web site title section 
        ----------------------
      */}
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
                                    <td className='td'>Foto </td>
                                    <td className='td'>Product</td>
                                    <td className='td'>Price</td>
                                    <td className='td'>Quantity</td>
                                    <td className='td'>Total</td>
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
                                            ${Number(product.price.slice(1)) * product.quanty}
                                        </td>
                                        <td className="td-sag">
                                            <AiTwotoneDelete className='delete'
                                               onClick={() => productRemovesfromCart(product.id)}
                                            />
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
                                    <p>Subtotal: $ {calculateTotal()}</p>
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
import React from 'react';
import { Helmet } from "react-helmet";

import Navbar from '../../Components/nav/nav';
import Footer from '../../Components/footer/footer';

import './register.css'
function Register() {

    return (


        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register | Electric scooter</title>
                <link rel="canonical" href="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/scooter-02.png" />
            </Helmet>
            <Navbar></Navbar>
            <main className="main">
                <div className="opsi">
                    <div className="gif" />
                    <div className="login">
                        <img
                            className="sekill"
                            src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/logo-regular.png"
                            alt=""
                        />
                        <div className="form__group field yuxari">
                            <input
                                type="input"
                                className="form__field"
                                placeholder="Name"
                                name="name2"
                                id="name2"
                                required=""
                            />
                            <label htmlFor="name2" className="form__label">
                                Your Name
                            </label>
                        </div>
                        <div className="form__group field orta">
                            <input
                                type="password"
                                className="form__field"
                                placeholder="Name"
                                name="name"
                                id="name"
                                required=""
                            />
                            <label htmlFor="name" className="form__label">
                                Password
                            </label>
                        </div>
                        <div className="form__group field orta">
                            <input
                                type="password"
                                className="form__field"
                                placeholder="Name"
                                name="name3"
                                id="name3"
                                required=""
                            />
                            <label htmlFor="name3" className="form__label">
                                Confirm Password
                            </label>
                        </div>
                        <div className="sag">
                            <label className="cyberpunk-checkbox-label">
                                <input type="checkbox" className="cyberpunk-checkbox" />
                                Remember Me
                            </label>
                        </div>
                        <div className="buttons2">
                            <div className="wrapper">
                                <button className="button2">
                                    <span>Register</span>
                                    <div className="success"></div>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main >
            <Footer></Footer>
        </>

    );
}

export default Register
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import Navbar from '../../Components/nav/nav';
import Footer from '../../Components/footer/footer';

import './login.css'
function Login() {

  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Login | Electric scooter</title>
                <link rel="canonical" href="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/scooter-02.png" />
            </Helmet>
      <Navbar></Navbar>
      <main className="main11">
        <div className="opsi22">
          <div className="gif1">
          </div>
          <div className="login22">
            <img className="sekil1"
              src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/logo-regular.png"
              alt="" />
            <div className="form__group field yuxari">
              <input type="input" className="form__field" placeholder="Name" name="name2" id="name2" required="" />
              <label htmlFor="name2" className="form__label">
                Username or Email Address
              </label>
            </div>
            <div className="form__group field orta">
              <input type="input" className="form__field" placeholder="Name" name="name" id="name" required="" />
              <label htmlFor="name" className="form__label">
                Password
              </label>
            </div>
            <div className="sag">
              <p>Forgot Password?</p>
              <label className="cyberpunk-checkbox-label">
                <input type="checkbox" className="cyberpunk-checkbox" />
                Remember Me
              </label>
            </div>
            <div className="buttons">
              <div className="wrapper">
                <button className="button1">
                  <span>Login</span>
                  <div className="success"></div>
                </button>
              </div>

              <Link to='/register'>
                <div className="wrapper">
                  <button className="button1">
                    <span>Register</span>
                    <div className="success"></div>
                  </button>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer></Footer>
    </>

  );
}

export default Login

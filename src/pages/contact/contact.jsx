import React from 'react';
import { Helmet } from "react-helmet";

import Navbar from '../../Components/nav/nav';
import Footer from '../../Components/footer/footer';

import './contact.css'


function Contact() {
  return (

    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Contact | Electric scooter</title>
                <link rel="canonical" href="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/scooter-02.png" />
            </Helmet>
      <Navbar></Navbar>
      <main className="main-contact">
        <div className="opsi-contact">
          <div className="gif-contact" />
          <div className="login-contact">

            <div className="form__group field yuxari">
              <input type="input" className="form__field" placeholder="Name" name="name2" id="name2" required="" />
              <label htmlFor="name2" className="form__label">
                Your Name
              </label>
            </div>
            <div className="form__group field yuxari">
              <input type="email" className="form__field" placeholder="Name" name="name" id="name" required="" />
              <label htmlFor="name" className="form__label">
                Your Email
              </label>
            </div>
            <div className="form__group field yuxari">
              <input type="input" className="form__field" placeholder="Name" name="name3" id="name3" required="" />
              <label htmlFor="name3" className="form__label">
                Subject
              </label>
            </div>
            <div className="form__group field yuxari">
              <input type="input" className="form__field" placeholder="Name" name="name4" id="name4" required="" />
              <label htmlFor="name4" className="form__label">
                Message
              </label>
            </div>

            <div className="buttons">
              <div className="wrapper">
                <button className="button1">
                  <span>Send</span>
                  <div className="success"></div>
                </button>
              </div>


            </div>

          </div>
        </div>
      </main>
      <iframe
        className="none block2"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5574.086854345258!2d49.85747655269107!3d40.38021703120613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d077c61fef3%3A0xfa4594c97092ca01!2sAF%20Business%20House!5e0!3m2!1str!2saz!4v1694036196648!5m2!1str!2saz"
        width={390}
        height={300}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <iframe
        className="none2"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5574.086854345258!2d49.85747655269107!3d40.38021703120613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d077c61fef3%3A0xfa4594c97092ca01!2sAF%20Business%20House!5e0!3m2!1str!2saz!4v1694036196648!5m2!1str!2saz"
        width={1510}
        height={600}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <Footer></Footer>
    </>
  );
}

export default Contact
import React from 'react';

function Hero() {
    return(
<section className="one">
        <div className="container">
          <div data-aos="flip-up" className="content">
            <h1>Awesome tools for Designer & Developer.</h1>
            <p>
              Antool is a web collection of information on paid or <br />free
              Design and Development tools
            </p>
            <form data-aos="zoom-out-right">
              <img src="./icons/search (1).svg" alt="" />
              <input type="text" placeholder="find more than 430+ tools..." />
              <button className="btn">Search</button>
            </form>
            <div className="icons">
              <img src="./icons/bx_bxl-facebook.svg" alt="" />
              <img src="./icons/bx_bxl-instagram.svg" alt="" />
              <img src="./icons/bx_bxl-twitter.svg" alt="" />
            </div>
          </div>
          <img
          data-aos="zoom-in-up"
          src="./img/Illustration.svg"
          alt=""
          />
        </div>
      </section>
    )
}

export default Hero
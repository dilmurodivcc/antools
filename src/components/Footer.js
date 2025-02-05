import React from 'react';

function Footer() {
    return(
        <footer>
        <div className="container">
          <div className="logo">
            <div className="icon">
              <img src="./icons/Group 159.svg" alt="" />
              <b> antools.</b>
            </div>
            <p  className="bold">
              Copyright 2021. Antools
            </p>
            <p className="regular">
              Antool is a web collection of <br />
              information on paid or free Design <br />
              and Development tools
            </p>
          </div>
          <div className="contact">
            <p className="bold">Contact Us</p>
            <a href="tel:+621987463">+621987463</a>
            <a href="">M Building, No.10 A</a>
            <a href="mailto:antools@awesome.com">antools@awesome.com"</a>
          </div>
          <div className="cot">
            <p className="bold">Categories</p>
            <p className="regular">Design</p>
            <p className="regular">Development</p>
          </div>
          <div className="info">
            <p className="bold">Company Info</p>
            <p className="regular">About Us</p>
            <p className="regular">Our Partners</p>
            <p className="regular">Blog</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer
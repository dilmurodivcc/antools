    import React from 'react';
    
    function Header() {
        return(
            <>
            <section className="four">
            <div className="container">
              <div className="main-content">
                <img src="./icons/chevron-left.svg" alt="" />
                <div className="content">
                  <div data-aos="zoom-in-right" className="img">
                    <img src="./img/Group 1419.png" alt="" />
                    <div data-aos="flip-left" className="card">
                      <h3>Ronald Richards</h3>
                      <p>Product Manager</p>
                    </div>
                  </div>
                  <div data-aos="zoom-out" className="text">
                    <img src="./icons/“.svg" alt="" />
                    <p>
                      Incididunt cillum do sint sint enim ullamco id deserunt mollit
                      <br />
                      qui reprehenderit do. Velit ex tempor cillum ad sint occaecat.
                      <br />
                      Do nulla velit labore occaecat do deserunt Lorem magna <br />
                      officia incididunt consectetur amet. Sunt consectetur veniam
                      <br />minim ex commodo sint non. Occaecat aute officia
                      excepteur <br />
                      non laboris id qui ad.
                    </p>
                  </div>
                </div>
                <img src="./icons/chevron-left (1).svg" alt="" />
              </div>
              <img src="./icons/Group 1433.svg" alt="" />
            </div>
          </section>
          <section data-aos="zoom-out-down" className="five">
            <h2>Become a contributor?</h2>
            <p>
              Join us and get tips & tricks to become a great <br />Designer and
              Developer
            </p>
            <form>
              <input type="text" placeholder="Enter your email..." />
              <button className="btn">Join Us</button>
            </form>
          </section>
          </>
        )
    }
    
    export default Header
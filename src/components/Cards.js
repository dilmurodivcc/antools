import React from 'react';

function Cards() {
    return(
<section className="two">
        <div className="container">
          <h2>Most Popular Tools</h2>
          <p className="main-p">
            Tools for the best Designers and Developers <br />
            most popularly used in the world
          </p>
          <div className="cards">
            <div data-aos="flip-up" data-aos-duration="2200" className="card">
              <div className="blur-circle"></div>
              <div className="logo">
                <img src="./icons/grommet-icons_figma.svg" alt="" />
                <div className="text">
                  <b>FIGMA</b>
                  <p>Free</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit.
              </p>
              <div className="bar">
                <div className="like">
                  <i className="fa-solid fa-heart"></i>
                  <img src="./icons/eva_folder-add-outline.svg" alt="" />
                </div>
                <button className="btn-card">Visit</button>
              </div>
            </div>
            <div data-aos="flip-down" data-aos-duration="2200" className="card">
              <div className="blur-circle"></div>

              <div className="logo">
                <img src="./icons/logos_sketch.svg" alt="" />
                <div className="text">
                  <b>Sketch</b>
                  <p>Trial & Paid</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit.
              </p>
              <div className="bar">
                <div className="like">
                  <i className="fa-solid fa-heart"></i>
                  <img src="./icons/eva_folder-add-outline.svg" alt="" />
                </div>
                <button className="btn-card">Visit</button>
              </div>
            </div>
            <div data-aos="flip-up" data-aos-duration="2200" className="card">
              <div className="blur-circle"></div>

              <div className="logo">
                <img src="./icons/logos_visual-studio-code.svg" alt="" />
                <div className="text">
                  <b>Visual Studio Code</b>
                  <p>Free</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit.
              </p>
              <div className="bar">
                <div className="like">
                  <i className="fa-solid fa-heart"></i>
                  <img src="./icons/eva_folder-add-outline.svg" alt="" />
                </div>
                <button className="btn-card">Visit</button>
              </div>
            </div>
          </div>
          <div data-aos="flip-down" data-aos-duration="2200" className="cards">
            <div className="card">
              <div className="blur-circle"></div>

              <div className="logo">
                <img src="./icons/notion.svg" alt="" />
                <div className="text">
                  <b>Notion</b>
                  <p>Free & Paid</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit.
              </p>
              <div className="bar">
                <div className="like">
                  <i className="fa-solid fa-heart"></i>
                  <img src="./icons/eva_folder-add-outline.svg" alt="" />
                </div>
                <button className="btn-card">Visit</button>
              </div>
            </div>
            <div data-aos="flip-up" data-aos-duration="2200" className="card">
              <div className="blur-circle"></div>

              <div className="logo">
                <img src="./icons/grommet-icons_slack.svg" alt="" />
                <div className="text">
                  <b>Slack</b>
                  <p>Free & Paid</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit.
              </p>
              <div className="bar">
                <div className="like">
                  <i className="fa-solid fa-heart"></i>
                  <img src="./icons/eva_folder-add-outline.svg" alt="" />
                </div>
                <button className="btn-card">Visit</button>
              </div>
            </div>
            <div data-aos="flip-down" data-aos-duration="2200" className="card">
              <div className="blur-circle"></div>

              <div className="logo">
                <img src="./icons/logos_invision-icon.svg" alt="" />
                <div className="text">
                  <b>Invision</b>
                  <p>Free & Paid</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit.
              </p>
              <div className="bar">
                <div className="like">
                  <i className="fa-solid fa-heart"></i>
                  <img src="./icons/eva_folder-add-outline.svg" alt="" />
                </div>
                <button className="btn-card">Visit</button>
              </div>
            </div>
          </div>
          <button className="btn-load">load more</button>

          <div data-aos="zoom-in-down" data-aos-duration="1500" className="brands">
            <div className="blur"></div>
            <h4>Trusted more than 150+ brand</h4>
            <div className="logos">
              <img src="./icons/logos_microsoft.svg" alt="" />
              <img src="./icons/logos_google.svg" alt="" />
              <img src="./icons/logos_slack.svg" alt="" />
              <img src="./icons/logos_wordpress.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Cards
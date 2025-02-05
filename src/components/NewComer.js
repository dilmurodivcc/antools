import React from 'react';

function NewC() {
    return(
<section className="three">
        <div className="container">
          <div data-aos="zoom-in-right" className="content">
            <h2>Newcomer Tools</h2>
            <p className="main-p">
              Wow! see the latest update of the most <br />recommended tools
              from reliable designers <br />
              and developers
            </p>
            <button className="btn">Explore more</button>
          </div>
          <div className="cards">
            <div className="line">
              <div data-aos="flip-right" className="card">
                <div className="icon">
                  <img src="./icons/zeplin.svg" alt="" />
                  <div className="text">
                    <b>Zeplin</b>
                    <p>Free & Paid</p>
                  </div>
                </div>
                <p className="lorem">
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit.
                </p>
                <div className="bar">
                  <div className="like">
                    <i className="fa-solid fa-heart"></i>
                    <img src="./icons/eva_folder-add-outline.svg" alt="" />
                  </div>
                  <button className="btn-card">Visit</button>
                </div>
              </div>
              <div data-aos="flip-right" className="card">
                <div className="icon">
                  <img src="./icons/jb_phpstorm.svg" alt="" />
                  <div className="text">
                    <b>PHPStorm</b>
                    <p>Free</p>
                  </div>
                </div>
                <p className="lorem">
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit.
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
            <div className="line">
              <div data-aos="flip-down" className="card">
                <div className="icon">
                  <img src="./icons/jb_toolbox_app.svg" alt="" />
                  <div className="text">
                    <b>Toolbox</b>
                    <p>Free</p>
                  </div>
                </div>
                <p className="lorem">
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit.
                </p>
                <div className="bar">
                  <div className="like">
                    <i className="fa-solid fa-heart"></i>
                    <img src="./icons/eva_folder-add-outline.svg" alt="" />
                  </div>
                  <button className="btn-card">Visit</button>
                </div>
              </div>
              <div data-aos="flip-down" className="card">
                <div className="icon">
                  <img src="./icons/procreate.svg" alt="" />
                  <div className="text">
                    <b>Procreate</b>
                    <p>Free</p>
                  </div>
                </div>
                <p className="lorem">
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit.
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
          </div>
        </div>
      </section>
    )
}

export default NewC
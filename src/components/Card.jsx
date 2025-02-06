import React from "react";

function Card({img, b, p, lorem,}) {
  return (
    <div className="cards">
      <div data-aos="flip-up" data-aos-duration="2200" className="card">
        <div className="blur-circle"></div>
        <div className="logo">
          <img src={img}  alt="" />
          <div className="text">
            <b>{b}</b>
            <p>{p}</p>
          </div>
        </div>
        <p>
          {lorem}
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
  );
}

export default Card;

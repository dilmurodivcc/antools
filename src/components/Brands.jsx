import React from "react";

function Brands({h4, img1, img2, img3, img4}) {
  return (
    <div data-aos="zoom-in-down" data-aos-duration="1500" className="brands">
      <div className="blur"></div>
      <h4>{h4}</h4>
      <div className="logos">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        
      </div>
    </div>
  );
}

export default Brands;
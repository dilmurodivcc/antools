import React from 'react'; 

function Header() {
    return(
  <header data-aos="fade-down" data-aos-duration="1000">
      <div className="container">
        <div className="logo">
          <img src="./icons/Group 159.svg" alt="" />
          <b>antools.</b>
        </div>
        <nav>
          <a>Home</a>
          <a>Categories <img src="./icons/chevron-down.svg" alt="" /></a>
          <a>My Collections</a>
          <a>Blog</a>
        </nav>
        <div className="nav-btn">
          <button id="toggle-theme" className="toggle">
            <i className="fa-solid fa-moon"></i>
          </button>
          <button className="btn">Sign Up</button>
        </div>
      </div>
    </header>
    )
}

export default Header
import React from 'react';
import Card from "./Card"
import Brands from "./Brands"


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
           <Card img="./icons/grommet-icons_figma.svg" b="Figma" p="Free" lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
           <Card img="./icons/logos_sketch.svg" b="Sketch" p="Trial & Paid" lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
           <Card img="./icons/logos_visual-studio-code.svg" b="Visual Studio Code" p="Free" lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
          </div>
          <div data-aos="flip-down" data-aos-duration="2200" className="cards">
            <Card img="./icons/notion.svg" b="Notion" p="Free & Paid" lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <Card img="./icons/grommet-icons_slack.svg" b="Slack" p="Free & Paid" lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <Card img="./icons/logos_invision-icon.svg" b="Invision" p="Free & Paid" lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
          </div>
          <button className="btn-load">load more</button>
          <Brands h4="Trusted more than 150+ brand" img1="./icons/logos_microsoft.svg" img2="./icons/logos_google.svg" img3="/icons/logos_slack.svg" img4="./icons/logos_wordpress.svg" />

        </div>
      </section>
    )
}

export default Cards
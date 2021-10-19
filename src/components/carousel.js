import React, { Component } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Carousel from "react-bootstrap/Carousel";
import {container, carousel, overlay, text} from "./carousel.module.css"
import SubscribeButton from "./subscription_button";

const BootstrapCarousel = () => {
  return (
    
    <div style={{height:"100%", width:"100%"}}>
    <div className={overlay}>
      
    </div>
      <div className={carousel}>
      
        <Carousel>
          <Carousel.Item style={{ height:'400px', textAlign:'center'}}>
            <StaticImage
              alt="Philly Skyline"
              src="../images/carousel/philadelphia.png"
              className="img-fluid"
              placeholder="blurred"
              layout="fullWidth"
            />
          </Carousel.Item>
          <Carousel.Item style={{ height:'400px', textAlign:'center'}}>
            <StaticImage
              alt="SHPE National Convention 2018"
              src="../images/carousel/NationalConvention2018.png"
              className="img-fluid"
              placeholder="blurred"
              layout="fullWidth"
            />
          </Carousel.Item>
          <Carousel.Item style={{ height:'400px', textAlign:'center'}}>
            <StaticImage
              alt="Trivia Night"
              src="../images/carousel/Trivia2.png"
              className="img-fluid"
              placeholder="blurred"
              layout="fullWidth"
            />
          </Carousel.Item>
        </Carousel>
        
      </div>
      <div className={text}><SubscribeButton/>
      </div>
    </div>
  );
};

export default BootstrapCarousel;

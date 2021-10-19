import React, { Component } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Carousel from "react-bootstrap/Carousel";
import {container, carousel, overlay, text, joinButton} from "./carousel.module.css"
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
      <div className={text}>
        <h1>Leading Hispanics in STEM</h1>
        <h2>SHPE is the nation’s largest association dedicated to fostering Hispanic leadership in the STEM field.</h2>
        <br></br>
        <h2>SHPE-GPC is proudly working towards empowering professionals and the community</h2>
        <div className="col">
        <a href="https://forms.gle/sRWWVXZZgMMjayPZ9" target="_blank" rel="noopener noreferrer">
          <Button className={joinButton}>
            Join Us
          </Button>
        </a>

        </div>
      </div>
    </div>
  );
};

export default BootstrapCarousel;

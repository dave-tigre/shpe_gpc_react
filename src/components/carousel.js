import React, { Component } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Carousel from "react-bootstrap/Carousel";
import {container, carousel, overlay, text, joinButton} from "./carousel.module.css"
import Button from "react-bootstrap/Button"
import { height } from "@mui/system";

const BootstrapCarousel = () => {
  return (
    
    <div style={{height:"100%", width:"100%"}}>
    <div className={overlay}>
      
    </div>
      <div className={carousel}>
      
        <Carousel>
          <Carousel.Item style={{ height:'100%', textAlign:'center'}}>
            <StaticImage
              alt="Philly Skyline"
              src="../images/carousel/philadelphia.png"
              className="img-fluid"
              placeholder="blurred"
              layout="fullWidth"
            />
          </Carousel.Item>
          <Carousel.Item style={{ height:'100%', textAlign:'center'}}>
            <StaticImage
              alt="SHPE National Convention 2018"
              src="../images/carousel/NationalConvention2018.png"
              className="img-fluid"
              placeholder="blurred"
              layout="fullWidth"
            />
          </Carousel.Item>
          <Carousel.Item style={{ height:'100%', textAlign:'center'}}>
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
      <div className={text} style={{height:'500px'}}>
        <h1 style={{fontFamily:"Impact"},{fontWeight:'bold'},{fontSize:'60px'}}>Leading Hispanics in STEM</h1>
        <h2 style={{fontSize:'30px'}}>SHPE is the nation’s largest association dedicated to fostering Hispanic leadership in the STEM field.
        Our Greater Philadelphia Chapter proudly works towards SHPE's mission of empowering professionals and the community</h2>
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

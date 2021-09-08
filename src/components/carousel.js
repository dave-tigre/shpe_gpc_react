import React, { Component } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Carousel from "react-bootstrap/Carousel";

import anImage from "../images/carousel/aldia_event.png";

const BootstrapCarousel = ({ carouselHeight, imageHeight }) => {
  const staticImageHeight = imageHeight;
  return (
    <div>
      <div className="container-fluid">
        <Carousel>
          <Carousel.Item style={{ height: { carouselHeight } }}>
            <img
              alt="SHPE-GPC Logo2"
              src={anImage}
              className="img-fluid"
              height={staticImageHeight}
            />

            <Carousel.Caption>
              <h3>First Demo </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ height: { carouselHeight } }}>
            <img
              alt="SHPE-GPC Logo2"
              src={anImage}
              className="img-fluid"
              height={staticImageHeight}
            />

            <Carousel.Caption>
              <h3>Second Demo</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ height: { carouselHeight } }}>
            <img
              alt="SHPE-GPC Logo2"
              src={anImage}
              className="img-fluid"
              height={staticImageHeight}
            />

            <Carousel.Caption>
              <h3>Third Demo</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default BootstrapCarousel;

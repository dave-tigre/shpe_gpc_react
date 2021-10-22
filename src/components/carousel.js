import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import Carousel from "react-bootstrap/Carousel";
import {
    container,
    headerBanner,
    bodyBanner,
    carousel,
    overlay,
    text,
    joinButton
} from "./carousel.module.css"
import Button from "react-bootstrap/Button"
import { Container } from "react-bootstrap";

const BootstrapCarousel = () => {
    return (
        <Container style={{maxHeight:'500px'}}>
            <div className={overlay}>
                <div className={carousel}>

                    <Carousel>
                        <Carousel.Item style={
                            {
                                textAlign: 'center'
                            }
                        }>
                            <StaticImage 
                                alt="Philly Skyline" 
                                src="../images/carousel/philadelphia.png"
                                placeholder="blurred"
                                layout='constrained'
                                height={500}
                            />
                        </Carousel.Item>
                        <Carousel.Item style={
                            {
                                textAlign: 'center'
                            }
                        }>
                            <StaticImage 
                                alt="SHPE National Convention 2018" 
                                src="../images/carousel/NationalConvention2018.png" 
                                placeholder="blurred"
                                layout='constrained'
                                height={500}
                            />
                        </Carousel.Item>
                        <Carousel.Item style={
                            {
                                textAlign: 'center'
                            }
                        }>
                            <StaticImage 
                                alt="Trivia Night" 
                                src="../images/carousel/Trivia2.png"
                                placeholder="blurred"
                                layout='constrained'
                                height={500}
                            />
                        </Carousel.Item>
                    </Carousel>


                </div>
            </div>
            <div className={container}>
              <div className={text}>
                  <h1 className={headerBanner}>Leading Latinos in STEM</h1>
                  <h2 className={bodyBanner}>SHPE is the nation’s largest association dedicated to fostering Hispanic leadership in the STEM field.</h2>
                 
                    <div className='row'>
                        <div className='col-sm-4'>
                            <a href="https://forms.gle/sRWWVXZZgMMjayPZ9" target="_blank" rel="noopener noreferrer">
                                <Button size="md" className={joinButton}>
                                    Join Us
                                </Button>
                            </a>
                        </div>

                        <div className='col-sm-6'>
                            <a href="https://www.shpe.org/" target="_blank" rel="noopener noreferrer">
                                <Button size="md" className={joinButton}>
                                    SHPE National
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            
            
        </Container>
    );
};

export default BootstrapCarousel;

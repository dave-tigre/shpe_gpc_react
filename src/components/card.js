import * as React from "react";
import Card from "react-bootstrap/Card";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import blankHeadshot from "../images/blankHeadshot.png";

const BootstrapCard = ({ imageSource, memberTitle, memberName, children }) => {

  
  const image = getImage(imageSource)

  return (
    <Card>
      <Card.Img as={GatsbyImage} src={image} fluid={true} alt="Card image" />
      <Card.Body>
        <Card.Title>{memberTitle}</Card.Title>
        <Card.Subtitle>{memberName}</Card.Subtitle>
        <Card.Text></Card.Text>
        <Card.Text>{children}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BootstrapCard;

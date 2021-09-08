import * as React from "react";
import Card from "react-bootstrap/Card";
import { StaticImage } from "gatsby-plugin-image";
import blankHeadshot from "../images/blankHeadshot.png";

const BootstrapCard = ({ imageSource, memberTitle, memberName, children }) => {

  
  if (imageSource == "")
  {
    imageSource = {blankHeadshot};
  }
  const headShot = imageSource;

  return (
    <Card>
      <Card.Img
        variant="top"
        src={headShot}
        className="img-fluid"
        alt="Card image"
      />
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

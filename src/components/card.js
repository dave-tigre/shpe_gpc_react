import * as React from 'react'
import Card from "react-bootstrap/Card";

import image from "../images/board_of_directors/moises_young.jpg";


const BootstrapCard = ({ imageSource, memberTitle, memberName, children }) => {
  return (
        <Card>
            <Card.Img variant="top" src={imageSource} className="img-fluid" alt="Card image" />
            <Card.Body>
            <Card.Title>{memberTitle}</Card.Title>
            <Card.Subtitle>{memberName}</Card.Subtitle>
            <Card.Text>
                
            </Card.Text>
            <Card.Text>
                {children}
            </Card.Text>
            </Card.Body>
        </Card>
    
  )
}

export default BootstrapCard
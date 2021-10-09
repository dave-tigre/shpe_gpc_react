import * as React from "react";
import { Container } from "react-layout-components";
import { container, footerButton, footer } from "./footer.module.css";
import Button from "react-bootstrap/Button"


const pathPrefix = "shpe_gpc_react/";
const Footer = () => {
 
  return (
      <footer id="footer">

        
        <a href="https://forms.gle/sRWWVXZZgMMjayPZ9" target="_blank" rel="noopener noreferrer">
        <Button className={footerButton}>
          Click Here to Subscribe To Our News Letter!
        </Button>
          </a>
        
      </footer>

  );
};

export default Footer;

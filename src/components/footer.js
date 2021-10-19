import * as React from "react";
import { container, footerButton, footer } from "./footer.module.css";
import SubscribeButton from "./subscription_button";

const Footer = () => {
 
  return (
      <footer id="footer" style={{height:'100%'}}>
        <SubscribeButton/>
      </footer>
  );
};

export default Footer;

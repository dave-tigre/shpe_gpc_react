import * as React from "react";
import { container, footerButton, footer } from "./footer.module.css";
import SubscribeButton from "./subscription_button";

const Footer = () => {
 
  return (
      <footer id="footer">
        <SubscribeButton/>
      </footer>
  );
};

export default Footer;

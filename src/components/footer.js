import * as React from "react";
import { Container } from "react-layout-components";
import { container } from "./footer.module.css";


const pathPrefix = "shpe_gpc_react/";
const Footer = () => {
 
  return (
    <Container>
      <div id="footer" className={container}>
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossorigin="anonymous"
        />
      </div>
        

    </Container>
  );
};

export default Footer;

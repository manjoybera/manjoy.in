import React from "react";
import "styles/Content.css";

function Footer(props: any) {
  return (
    <div className="footerDiv">
      Made with ❤ in India. © {new Date().getFullYear()} Manjoy Bera
    </div>
  );
}

export default Footer;

import React from "react";
import "styles/Content.css";

function Footer(props: any) {
  return (
    <div className="footerDiv">
      Made with ❤ in India. © {new Date().getFullYear()} Manjoy Bera
      <div className={"githubDiv"}>
        See source code at{" "}
        <a
          href="https://github.com/manjoybera/manjoy.in"
          target="_blank"
          rel="noreferrer"
          className={"githubLink"}
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Footer;

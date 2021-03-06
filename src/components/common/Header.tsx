import React from "react";
import "styles/Content.css";

function Header(props: any) {
  return (
    <div className="headerDiv">
      <div className="headerDivLogo"></div>
      <div className="headerDivText">
        <span className="headerDivTextCode">
          git init <a href="">manjoy.in</a>
        </span>
        <br />
        <span className="headerDivTextCode">git status</span>
        <div className="headerDivTextCodeResult">
          &gt; Manjoy Kumar Bera <br /> &gt; Full Stack Developer (.NET)
        </div>
      </div>
    </div>
  );
}

export default Header;

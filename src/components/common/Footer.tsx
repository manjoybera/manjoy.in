import React from "react";

// Footer CSS
const footerDivCss = {
  height: "3rem",
  width: "80vw",
  fontSize: "1rem",
  textAlign: "center",
  color: "grey",
  borderTop: "1px solid grey",
  padding: "1rem",
  marginTop: "2rem",
} as React.CSSProperties; // Add this if there is typecheck issue with CSS

const githubDivCss = {
  fontSize: "0.9rem",
};

const githubLinkCss = {
  color: "grey",
};

function Footer(props: any) {
  return (
    <div style={footerDivCss}>
      Made with ❤ in India. © {new Date().getFullYear()} Manjoy Bera
      <div style={githubDivCss}>
        See source code at{" "}
        <a
          href="https://github.com/manjoybera/manjoy.in"
          target="_blank"
          rel="noreferrer"
          style={githubLinkCss}
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import { useMediaQuery } from "react-responsive";
import { HeaderConst } from "constants/common";
import { DarkMode, WbSunny } from "styled-icons/material";
import { useGlobalContext } from "contexts/store";
import { actionType } from "contexts/actions";

// CSS Styles
const headerDivCss = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100vw",
  paddingTop: "2rem",
};

const headerDivLogoCss = {
  flexGrow: 1,
  paddingLeft: "2rem",
};

const headerDivText = {
  padding: "0 2rem",
  textAlign: "left",
} as React.CSSProperties;

const headerDivTextCode = {
  borderRadius: "5px",
  margin: "5px",
  textAlign: "left",
  font: "14px ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace",
  background: "#bcd346",
  color: "#4e4e4e",
  padding: "2px 5px",
  width: "10rem",
} as React.CSSProperties;

const headerDivTextCodeResult = {
  margin: "5px",
  textAlign: "left",
  font: "16px ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono Menlo, monospace",
} as React.CSSProperties;

export function Header(props: any) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const { state, dispatch } = useGlobalContext();

  const DarkModeIconCss = {
    color: state.Theme.TextColor,
    height: "2rem",
    margin: "5px",
    alignSelf: "flex-start",
    cursor: "pointer",
  };

  return (
    <div
      style={
        isTabletOrMobile && isPortrait
          ? { ...headerDivCss, display: "unset" }
          : headerDivCss
      }
    >
      <div
        style={headerDivLogoCss}
        onClick={() => dispatch({ type: actionType.ToggleDarkTheme })}
      >
        {state.Theme.ShowDarkTheme ? (
          <WbSunny style={DarkModeIconCss} className={"DarkModeIcon"} />
        ) : (
          <DarkMode style={DarkModeIconCss} className={"DarkModeIcon"} />
        )}
      </div>
      <div style={headerDivText}>
        <div style={headerDivTextCode}>
          git init <a href="/#">manjoy.in</a>
        </div>
        <div style={{ ...headerDivTextCode, width: "5rem" }}>git status</div>
        <div style={headerDivTextCodeResult}>
          &gt; {HeaderConst.PortfolioName} <br /> &gt;{" "}
          {HeaderConst.PortfolioTitle}
        </div>
      </div>
    </div>
  );
}

export default Header;

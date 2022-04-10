import React, { useState, useEffect } from "react";
import "./styles/global.css";
import "./styles/app.css";
import Header from "./components/common/Header";
import ContentWrapper from "./components/common/ContentWrapper";
import Footer from "./components/common/Footer";
import { useGlobalContext, GlobalContext } from "./contexts/store";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const { state } = useGlobalContext();
  //const { state, dispatch } = useContext(GlobalContext) as GlobalContextType;

  const AppHeaderCss = {
    backgroundColor: state.Theme.BackgroundColor,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
    color: state.Theme.TextColor,
    ///height: "110vh",
  } as React.CSSProperties; // Add this if there is typecheck issue with CSS

  return (
    <div style={AppHeaderCss}>
      <Header />
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import "./styles/App.css";
import Header from "./components/common/Header";
import ContentWrapper from "./components/common/ContentWrapper";
import Footer from "./components/common/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App-header">
        <Header />
        <ContentWrapper />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import "./styles/app.css";
import Header from "./components/common/Header";
import ContentWrapper from "./components/common/ContentWrapper";
import Footer from "./components/common/Footer";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./contexts/store"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <div className="App-header">
          <Header />
          <ContentWrapper />
          <Footer />
        </div>
      </BrowserRouter>
   </StoreProvider>
  );
}

export default App;

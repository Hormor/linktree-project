import React from "react";
import Header from "./components/header";
import Anchor from "./components/anchor";
import Socials from "./components/social-section";
import "./App.css";

function App() {
  return (
      <div className="content">
        <div className="container">
          <Header />
          <Anchor />
        </div>
        <Socials />
      </div>
  );
}

export default App;

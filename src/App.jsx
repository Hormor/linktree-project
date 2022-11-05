import React from "react";
import Header from "./Components/header";
import Anchor from "./Components/anchor";
import Socials from "./Components/social-section";
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

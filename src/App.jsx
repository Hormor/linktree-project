import React from 'react'
import Header from './Components/header'
import Anchor from './Components/anchor'
import Socials from "./Components/social-section";
import Footer from "./Components/footer";
import './App.css'

function App() {

  return (
    <div className="container">
      <div className="content">
        <div className="main">
          <Header />
          <Anchor />
        </div>
        <Socials />
      </div>
      <Footer />
    </div>
  );
    
}

export default App

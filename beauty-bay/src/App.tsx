import React from "react";
import css from "./App.css";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Routes>{ <Route path="/" element={<Home />} /> }</Routes>
    //   <div>"Hi"</div>
    // </div>
    <div className="Home Container">
      <div className="Header">
        <h1>🤑 Get 10% off with code: BB10 *exclusions apply 🤑 </h1>
      </div>

      <div className="subHeader">
        <h2>
          <p> Want it tomorrow? Order by 11pm</p>
          <p>Pay later with Klarna 💅</p>
          <p>Free 60 day returns 👏</p>
          <p>Get unlimited delivery 👑</p>
          <p>Help & Information</p>
          <p>Connect with us</p>
        </h2>
      </div>
      <div className="Searchbar">
        <input></input>
      </div>
      <div className="HeaderIcons">
        <img
          src="https://cdn.freelogovectors.net/wp-content/uploads/2021/01/beauty-bay-logo-freelogovectors.net_-768x361.png"
          alt="Beauty Bay Logo"
        ></img>
      </div>
      <div className=""></div>
    </div>
  );
}

export default App;

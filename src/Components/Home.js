import React, { Component } from "react";
import ReactDOM from "react-dom";
import Work from "./Work";
import "../styles/Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="title-padding">
          <h1 className="name-title-text"> Kevin Benelli </h1>
          <img src={require("../pictures/resume-pic1.jpg")} />
        </div>
      </div>
    );
  }
}

export default Home;

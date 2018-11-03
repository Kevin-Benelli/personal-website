import React, { Component } from "react";
import ReactDOM from "react-dom";
import Work from "./Work";
import "../styles/Home.css";
import { SocialIcon } from "react-social-icons";

class Home extends Component {
  render() {
    // var { SocialIcon } = require("react-social-icons");
    return (
      <div>
        <h1 className="name-title-text "> Kevin Benelli </h1>
        <div className="title-padding">
          <img
            className="round-image"
            src={require("../pictures/resume-pic1.jpg")}
          />

          <div className="sub-title ">
            <p>Software Engineer Intern at Remot3.it</p>
            <p>UC Davis, Computer Science</p>
          </div>
        </div>

        <nav className="social-link-padding">
          <SocialIcon url="https://www.linkedin.com/in/kevinbenelli/" />
          <SocialIcon
            network="facebook"
            url="https://www.facebook.com/kevin.benelli"
          />

          <SocialIcon
            network="github"
            color="#333"
            url="https://github.com/Kevin-Benelli"
          />

          <SocialIcon
            network="instagram"
            color="#fb3958"
            url="https://www.instagram.com/kbenelli707/"
          />
        </nav>
        <div />
      </div>
    );
  }
}

export default Home;

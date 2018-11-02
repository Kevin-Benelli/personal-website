import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../styles/Work.css";

class Work extends Component {
  render() {
    return (
      <div>
        <body className="body-text page-container">
          <div className="work-experience page-container">
            <h2> Summary Of Qualifications:</h2>
          </div>
          <div className="body-text">
            <h3 className="sub-header">Work Experience:</h3>
            <h4 className="sub-header-child">
              <p>
                Current: Land O' Lakes Software Developer October 2018- Current{" "}
              </p>
              <p>
                {" "}
                Past: Remot3.it: Software Engineer Intern. - June 2018 - October
                2018
              </p>
            </h4>
            <hr />
            <div className="work-experience-body body-text">
              <img src={require("../pictures/resume.jpg")} />
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Work;

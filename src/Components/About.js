import React, { Component } from "react";
import "../styles/About.css";

class About extends Component {
  render() {
    return (
      <div>
        <body>
          <div className="sub-category">
            <h1>Education</h1>
            <p>UC Davis, Computer Science</p>
            <p>
              Santa Rosa Junior College, Computer Science/Mathematics (3.60 GPA)
            </p>
          </div>

          <div className="sub-category">
            <h1>Extracurricular </h1>
            <p>Computer Science Club: UC Davis</p>
            <p>Computer Science Club: SRJC</p>
          </div>

          <div className="sub-category">
            <h2>Hobbies</h2>
            <p> Biking </p>
            <p> Tennis </p>
          </div>
        </body>
      </div>
    );
  }
}

export default About;

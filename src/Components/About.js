import React, { Component } from "react";
import "../styles/About.css";

class About extends Component {
  render() {
    return (
      <div>
        <body className="body-text">
          <div className="sub-category">
            <h1 className="header-format">Computer Science Background</h1>
            <ul>
              <li>
                <strong>Programming:</strong> JavaScript, C++, HTML, CSS,
                ReactJS, Linux, Unix, Bash, Shell
              </li>

              <li>
                <strong>Version Control:</strong> Git, GitHub
              </li>
              <li>
                <strong>Software Development Methodologies:</strong> Continuous
                Development, Agile Development, Jira
              </li>
            </ul>
          </div>

          <div className="sub-category">
            <div className="header-format">
              <h1>Education</h1>
            </div>
            <p>UC Davis, Computer Science</p>
            <p>
              Santa Rosa Junior College, Computer Science/Mathematics (3.60 GPA)
            </p>
          </div>

          <div className="sub-category">
            <h1 className="header-format">Extracurricular </h1>
            <p>Computer Science Club: UC Davis</p>
            <p>Computer Science Club: SRJC</p>
          </div>

          <div className="sub-category">
            <h1 className="header-format">Hobbies</h1>
            <p> Raspberry Pi Programming</p>
            <p>Computer Science Conferences</p>
            <p> Biking </p>
            <p> Tennis </p>
          </div>
        </body>
      </div>
    );
  }
}

export default About;

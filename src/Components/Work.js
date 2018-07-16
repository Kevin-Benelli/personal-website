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
              Remot3.it: Software Engineer Intern. - June 2018 - September 2018
            </h4>
            <hr />
            <div className="work-experience-body">
              <ul className="list-style">
                <li>Full time Software Engineering Internship </li>
                <li>
                  Created ReactJS administrative application prototype for the
                  Japanese conglomerate SoftBank, to analyze data pertaining to
                  their resold sub-companies’ device usage.
                </li>
                <li>
                  Created a slideshow application in ReactJS, using an instagram
                  API for the Sonoma Startup Workspace. I then hosted the
                  application on a raspberry pi.
                </li>

                <li>
                  Contributed code to fix functionality of primary remot3.it web
                  application using HTMl, CSS, Java Script, and JQuery.
                </li>

                <li>Used Agile and Continuous software methodologies</li>
                <li>git and Github for version control</li>
                <li>Jira for issuing and assignment of tasks.</li>

                <li>
                  Worked with raspberry pi’s using debugging tools to test our
                  installation software.
                </li>
              </ul>
            </div>
          </div>
          Programming languages: JavaScript C++, HTML, CSS, ReactJS Version
          Control: Git, GitHub Command line, Excel Education UC Santa Cruz,
          Computer Science View the college's website! Santa Rosa Junior College
          (3.62 GPA) View the college's website! Piner Highschool Work
          Experience Experience as a FullStack Software Engineer Intern (Summer
          2018) View the company's website! Experience as a paralegal for Law
          Offices of Steven Taxman (3 years) View the company's website!
          Experience as a teachers assistance for SRJC English Professor (1
          year)
        </body>
      </div>
    );
  }
}

export default Work;

import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
              
              <a href="https://github.com/vinay16121997"  target="_blank">
                <i className="fa fa-git" />
              </a>
              <a href="https://www.instagram.com/vinay_gaonkar_/"  target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.youtube.com/channel/UCSSr5ZDFbilpZ592_ycoAwA"  target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">VINAY</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Budding Data Scientist 😎",
                    1000,
                    "Unity Game Developer 💻",
                    1000,
                    "Ethusiastic ML/DL practitioner",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              knack of playing with code and loves creating ML models
            </span>
          </div>

          <div className="profile-options">
            {/* <button className="btn primary-btn"> Hire Me </button> */}
            <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

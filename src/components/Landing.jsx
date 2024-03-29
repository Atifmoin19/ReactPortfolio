import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Typical from "react-typical";
import Project from "./Project";

const Landing = (props) => {
  return (
    <div className="Landingpage" style={props.style}>
      <div className="infoPart" id="aboutme">
        <div className="infoPartimage">
          <div className="infoPartimage_bg"></div>
        </div>
        <div className="Detailspart">
          <h1>Atif Moin</h1>
          <h2>
            <Typical
              steps={[
                "I am a Web Developer! 💻",
                1000,
                "I am a Graphic Designer🖌️",
                1000,
              ]}
              loop={Infinity}
              from={"I"}
            />
          </h2>
          <div className="socialmedia">
            <div>
              <a
                href="https://www.facebook.com/jsone.atif/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/_.a_ti_f._/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div>
              {" "}
              <a
                href="https://www.linkedin.com/in/atif-moin-858167179/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="contentpart" id="project">
        <h1 id="project">Projects Web Develpoment</h1>
        <div className="projectPart">
          <Project />
        </div>
      </div>
    </div>
  );
};

export default Landing;

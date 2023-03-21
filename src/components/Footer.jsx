import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import image from "../resources/resume.png";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="Footer">
        <div className="leftsidef">
          <div className="Logo">
            <div className="resume">
              <div className="resumeimage">
                <img src={image} alt="s" />
              </div>
              <div className="buttonsr">
                <a
                  href="../resources/resume.pdf"
                  alt="download"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btnr downbtn">
                    <FontAwesomeIcon icon={faDownload} /> Download
                  </div>
                </a>
                <a
                  href="https://drive.google.com/file/d/18bVKoTyhqwhD5WiN3S43MBnagypE0h9B/view?usp=share_link"
                  alt="view"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btnr viewbtn">
                    <FontAwesomeIcon icon={faEye} /> View
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="rightsidef" id="contact">
          <h1>Contact</h1>
          <div className="Contact-info">
            <span>
              <h2> Ph.No. :</h2> +91-7007136187
            </span>
            <span>
              <h2>Email :</h2> atifmoin52@gmail.com
            </span>
            <span>
              <h2>Address:</h2> Plot No 63, Site IV, <br />
              Surya Nagar Flyover Road,
              <br /> Sahibabad Industrial Area, Sahibabad, <br />
              Ghaziabad, Uttar Pradesh 201010
            </span>
          </div>
          <div className="Contact-follow">
            <a
              href="https://www.facebook.com/jsone.atif/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/_.a_ti_f._/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://github.com/Atifmoin19"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/atif-moin-858167179/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://wa.me/7007136187?text=Hello%20Atif"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <div className="Whatsapp"> Whatsapp Me</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

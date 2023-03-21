import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Formultimaate = () => {
  const [FullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const form = useRef();
  const inputEvent = (event) => {
    const { value, name } = event.target;
    setFullName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "Portfolio_msg",
        "template_j7msv8c",
        form.current,
        "user_lOVyWwC9xWmzokD0pkxNB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert(
      " Thanks " +
        FullName.fname +
        " " +
        FullName.lname +
        "  For subbmitting form"
    );
    event.target.reset();
    event.targe.value.reset();
  };

  return (
    <div className="contactform">
      <div className="HeadingForm">
        <h1>FEEDBACK FORM</h1>
      </div>
      <div className="Form" id="Feedback">
        <div className="cardcontact">
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
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="input">
            <div className="inputbox">
              <input type="text" name="fname" onChange={inputEvent} required />
              <span>First Name</span>
            </div>

            <div className="inputbox">
              <input type="text" name="lname" onChange={inputEvent} required />
              <span>Last Name</span>
            </div>

            <div className="inputbox">
              <input type="email" name="email" onChange={inputEvent} required />
              <span>Email</span>
            </div>
            <div className="inputbox">
              <textarea name="message" required />
              <span>Feedback</span>
            </div>

            <button type="submit" value="Send">
              click
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formultimaate;

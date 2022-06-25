import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import image from '../resources/logo.png';

const Footer = () => {
    return (
        <div>
            <div className='Footer'>
            <div className='leftsidef'>
            <div className='Logo'>
                    <img src={image} alt='logo'/>
                </div>
                </div>
             <div className='rightsidef' id='contact'>
                <h1>Contact</h1>
                <div className='Contact-info'>
                <span><h2> Ph.No. :</h2> +91-7007136187</span>
                <span><h2>Email :</h2> atifmoin52@gmail.com</span>
                <span><h2>Address:</h2> Plot No 63, Site IV, <br/>Surya Nagar Flyover Road,<br/> Sahibabad Industrial Area, Sahibabad, <br/>Ghaziabad, Uttar Pradesh 201010</span>
                </div>
                <div className='Contact-follow'>
                <a href='https://www.facebook.com/jsone.atif/'  target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href='https://www.instagram.com/_.a_ti_f._/'  target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href='https://github.com/Atifmoin19'  target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href='https://www.linkedin.com/in/atif-moin-858167179/'  target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://wa.me/15551234567?text=Hello%20Atif" target="_blank"> <div className='Whatsapp'> Whatsapp Me</div></a>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;

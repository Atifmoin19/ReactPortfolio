import React from 'react';
import image from '../resources/my.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons' 

import Project from './Project';

const Landing = (props) => {
    return (
        <div className='Landingpage' style={props.style}>
        <div className='infoPart'>
                <img src={image}/>
                <div className='Detailspart'>
                <h1>Atif Moin</h1>
                <p> My name is atif moin and i am a web developer and a graphic designer also good at coding. </p>
                <div className='socialmedia'>
               <div><a href='https://www.facebook.com/jsone.atif/'  target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></div>
                <div><a href='https://www.instagram.com/_.a_ti_f._/' target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></div>
               <div> <a href='https://www.linkedin.com/in/atif-moin-858167179/' target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></div>        
                </div>
                </div>

</div>

<div className='contentpart' id ="aboutme">
<h1  id ="project">Projects</h1>
<div className='projectPart'>
         <Project/>
         </div>
</div>
            
        </div>
        
    );
}

export default Landing;

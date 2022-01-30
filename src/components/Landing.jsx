import React from 'react';
import image from '../resources/my.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons' 

import Project from './Project';

const Landing = () => {
    return (
        <div className='Landingpage'>
        <div className='infoPart'>
            
                <img src={image}/>
                <div className='Detailspart'>
                <h1>Atif Moin</h1>
                <p> My name is atif moin and i am a web developer and a graphic designer also good at coding. </p>
                <div className='socialmedia'>
               <div><a href='https://www.instagram.com/_.a_ti_f._/'><FontAwesomeIcon icon={faFacebookF} /></a></div>
                <div><a href='https://www.instagram.com/_.a_ti_f._/'><FontAwesomeIcon icon={faInstagram} /></a></div>
               <div> <a href='https://www.instagram.com/_.a_ti_f._/'><FontAwesomeIcon icon={faTwitter} /></a></div>                </div>
                </div>

</div>

<div className='contentpart'>
<h1>Projects</h1>
<div className='projectPart'>
         <Project/>
         </div>
</div>
            
        </div>
        
    );
}

export default Landing;

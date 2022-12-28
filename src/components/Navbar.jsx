import React,{useState} from 'react';
import image from '../resources/logo.png';


const Navbar = () => {
 
    return (
        <div>
        <div className='bodypart' id='top'>
            <div className="Navbar">
                <div className='Logo'>
                    <img src={image} alt='logo'/> <span className="namelogo"><h1>Aitf moin</h1></span>
                </div>
              
        
    
                <ul className='links' >
                   <li><a href='#aboutme'>About Me </a></li>
                     <li><a href="#project">Project </a></li>
                     <li><a href="#Feedback">Feedback </a></li>
                     <li><a href="#contact">Contact </a></li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default Navbar;

import React,{useState} from 'react';
import image from '../resources/logo.png';


const Navbar = () => {
 
    return (
        <div>
        <div className='bodypart'>
            <div className="Navbar" id='top'>
                <div className='Logo'>
                    <img src={image} alt='logo'/>
                </div>
                <div className='Serchbox'>
                <h1>+</h1>
                    <input type="text" placeholder='Serch for intrest'/>
                </div>
        
    
                <div className='links' >
                    <a href='#aboutme'>About Me </a>
                    <a href="#project">Project </a>
                    <a href="#">Info </a>
                    <a href="#Feedback">Feedback </a>
                    <a href="#contact">Contact </a>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Navbar;

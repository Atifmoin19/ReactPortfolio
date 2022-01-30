import React from 'react';
import image from '../resources/logo.png'
const Navbar = () => {
    return (
        <div>
        <div className='bodypart'>
            <div className="Navbar">
                <div className='Logo'>
                    <img src={image} alt='logo'/>
                </div>
                <div className='Serchbox'>
                <h1>+</h1>
                    <input type="text" placeholder='Serch for intrest'/>
                </div>
                <div className='links'>
                    <a href="/">About Us </a>
                    <a href="/">Resources </a>
                    <a href="/">Info </a>
                    <a href="/">Feedback </a>
                    <a href="/">Contact </a>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Navbar;

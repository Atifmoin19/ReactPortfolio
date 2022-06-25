import React from 'react';

const Design = (props) => {
    return (
        <div className="Maincard">
            <div className='Card'>
                <div className='image'>
                    <img src={props.src}></img>
                    <h2>Hover me</h2>
                </div>
                <div className='details'>
                <h2>{props.title}</h2>
                    <p>{props.details}</p>
                    <a href={props.link} target="_blank"><button>Link</button></a>
                </div>
            </div>
        </div>
    );
}

export default Design;

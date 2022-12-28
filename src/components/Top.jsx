import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUps} from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


const Top = () => {
    return (
        <div>
            <div className='fix'>
            <a href='#top'><FontAwesomeIcon icon={faArrowUp}/></a>
            
            </div>
        </div>
    );
}

export default Top;

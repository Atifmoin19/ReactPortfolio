import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

function Ncard (val){
    return (
   
    <Card 
        key={val.id} 
            src={val.src}
            title={val.title}
            details={val.details}
            link={val.link}
         />
       );
}

const Project = () => {
    return (
        <>
 
        {Sdata.map(Ncard)}
            </>
    );
}

export default Project;

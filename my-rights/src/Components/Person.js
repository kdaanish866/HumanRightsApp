// CHANGES BY RACHEL
import React from 'react';
import '../Css/Person.css';

const Person = ({icon, heading, desc})=> {
    return (
        <div className='person'>
            <img src={icon} style={{ width: 70, height: 90 }} alt="person"/>
            <span>{heading}</span>
            <span>{desc}</span>
        </div>
    )
}
export default Person;
// CHANGES BY RACHEL
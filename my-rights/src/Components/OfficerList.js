import React  from 'react';
import { NavLink } from 'react-router-dom';
import "../Css/Officers.css";
import Stars from "../images/stars.png";

const OfficerList=({officers, title, handleDelete})=> {

    return (
        <>
            <div className='officers'>
                <h2>{ title }</h2>
                {officers.map((officer)=> (
                    <div className='cop' key={officer.id}>
                        <button onClick={() => handleDelete(officer.id)} className='close'>&times;</button>
                        <h2>John Doe</h2>
                        <h3> Badge Number: { officer.badge }</h3>
                        <img src={Stars} style={{ width: 140, height: 35 }} alt="stars"/>
                        <div className='buttons'>
                            <button className='btn'>Write a Review</button>
                            <button className='btn'>
                                <NavLink to='/profile'>See Profile</NavLink>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default OfficerList;
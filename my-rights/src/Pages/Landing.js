
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Css/Landing.css';

const Landing=()=> {
return(
    <>
    <div className='container'>
        <div className='contentBox'>
            <h1>Human Rights Project</h1>
            <p>blah blah</p>
            <div className='btnBox'>
                <div className='btn'>
                    <NavLink to="/profile" className="policeProfile" style={{ textDecoration: 'none' }}>Register as Police Officer</NavLink>
                </div>
                <div className='btn'>
                    <NavLink to="/search" className="searchProfile" style={{ textDecoration: 'none' }}>Find a Police Officer</NavLink>
                </div>
            </div>
        </div>
    </div>
    </>
)
}
export default Landing;
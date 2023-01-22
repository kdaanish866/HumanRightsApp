
import { NavLink } from 'react-router-dom';
import "../Css/Navbar.css";

const Navbar=()=> {
    return (
        <> 
        <header>
            <div className='box box-flex'>
                <div className='logo-container'>
                    <h1 className='navbar-logo'>Human Rights</h1>
                </div>
                <nav>
                    <div className='navbarItems'>
                        <NavLink to="/" className="nav-link" activeClassName="active-nav-link">Home</NavLink>
                        <NavLink to="/" className="nav-link" activeClassName="active-nav-link">Home</NavLink>
                        <NavLink to="/" className="nav-link" activeClassName="active-nav-link">Home</NavLink>
                        
                    </div>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Navbar;
import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="navbar__container">
                   <Link className='nav__logo' to='/' > Dolla </Link> 
                <div className="mobile__icon">
                    <i class="fas fa-bars"></i>
                </div>
                <div className="nav__menu">
                        <Link className='nav__item' to='About'>About</Link>
                        <Link className='nav__item' to='Discover'>Discover</Link>
                        <Link className='nav__item' to='Services'>Services</Link>
                        <Link className='nav__item' to='SignUp'>Sign Up</Link>
                </div>
                    <Link className='nav__button' to='SignIn'>Sign In</Link>
            </div>
        </nav>
        
    )
}

export default Navbar;

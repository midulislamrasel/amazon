import React from 'react';
import './Navbar.css'
import logo from '../../images/Logo.svg'


const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div className='navlist'>
                <a href="#">Order</a>
                <a href="#">Order Review</a>
                <a href="#">Manage Inventory</a>
                <a href="#">logo</a>
            </div>
        </nav>
    );
};

export default Navbar;
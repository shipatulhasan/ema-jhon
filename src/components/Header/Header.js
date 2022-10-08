import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <section className='header'>
            <div className="container">
                <nav>
                    <div className="logo">
                    <img src={logo} alt="" />
                    </div>
                    <ul>
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/orders">Orders</Link></li>
                        <li><Link to="/login">Login</Link></li>
       
                    </ul>
                </nav>
            </div>
            
        </section>
    );
};

export default Header;
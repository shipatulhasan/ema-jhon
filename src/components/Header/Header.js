import React from 'react';
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
                        <li><a href="/home">Home</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/order">Order</a></li>
                        <li><a href="/login">Login</a></li>
       
                    </ul>
                </nav>
            </div>
            
        </section>
    );
};

export default Header;
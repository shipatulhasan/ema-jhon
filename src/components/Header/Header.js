import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { AuthContext } from '../../UseContext';
import './Header.css'

const Header = () => {
    const {user,logOut} = useContext(AuthContext)

    const userName = user?.email
    

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{ })
        .catch(error=>console.error(error))
    }


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
                        <li><Link to="/signup">Sign Up</Link></li>
                        {
                            user && user.uid ? <li><Link to='/login' onClick={handleLogOut}>Logout</Link></li>
                            :
                            <li><Link to="/login">Login</Link></li>
                        
                        }
                        {
                            user && <li className='user'>{userName?.split('@')[0]}</li>
                            
                        }
       
                    </ul>
                </nav>
            </div>
            
        </section>
    );
};

export default Header;
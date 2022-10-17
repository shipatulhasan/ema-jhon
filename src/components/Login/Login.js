import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UseContext';
import './Login.css';

const Login = () => {
 const {signInUser} = useContext(AuthContext)
 const [error,setError] = useState('')
 const navigate = useNavigate()
 const location =  useLocation()
 let from = location.state?.from?.pathname || "/";

 const handleLogin = (e)=>{

    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const pass = form.password.value

    signInUser(email,pass)
    .then(result=>{
        const user = result.user
        console.log('Registerd:', user)
        form.reset()
        navigate(from, { replace: true });
    })
    .catch(error=>{
        console.error(error)
        setError(error.message)
    })
    setError('')
    console.log(email,pass)
}

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <p className='text-error'>{error}</p>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to ema john <Link to='/signup'>Create a New Account</Link></p>
        </div>
    );
};

export default Login;
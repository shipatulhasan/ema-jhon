import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UseContext';
import './SignUp.css';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)

    const [error,setError] = useState('')
  
    const handleSignUp = (e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const pass = form.password.value
        const confirmPass = form.confirm.value

        if(pass.length < 8){
            setError('You must enter 8 character to set password')
            return
        }

        if(pass!==confirmPass){
            setError(`password isn't match with confirm pass`)
            return
        }

        createUser(email,pass)
        .then(result=>{
            const user = result.user
            console.log('Registerd:', user)
            form.reset()
        })
        .catch(error=>console.error(error))

        console.log(email,pass,confirmPass)
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <p className='text-error'>{error}</p>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already Have an Account <Link to='/login'>Login</Link></p>
            
        </div>
    );
};

export default SignUp;
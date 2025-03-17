import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import LoginController from '../controller/LoginController';
import './Login.css';

// Access the function from the default export within ValidationController
const { ValidateLoginValues, SubmitLogin } = LoginController;

function Login(){

    const [values, setValues] = useState({
        email: '',
        password:''
    })
    const navigate = useNavigate(); 
    const [errors, setErrors] = useState({})

    // Set inputs values
    const handleInput = (event) => {
        setValues(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const validationErrors = ValidateLoginValues(values);
        setErrors(validationErrors);

        if(Object.values(validationErrors).every(error => error === "")) {
            try{
                const response = await SubmitLogin(values);
                if(response.success)
                    navigate('/sadasboard');
            } catch(err){
                if(err.response?.data?.error) {
                    alert(err.response.data.error);
                } else {
                    alert('Login failed. Please try again.');
                }
            }
        }
    }

    return(
        <div className='Login'>
            <div>
                <form action='' onSubmit={handleLogin} className='login-form'>
                    <div className='fields'>
                        <label htmlFor='email'>
                            <strong>
                                Email<span style={{ color: 'red' }}>*</span>
                            </strong>
                        </label>
                        <input type='email' 
                            name='email'
                            placeholder='Enter Email' 
                            onChange={handleInput}
                        />
                        {errors.email && <span className='error'>
                            {errors.email}
                        </span>}
                    </div>

                    <div className='fields'>
                        <label htmlFor='password'>
                            <strong>
                                Password<span style={{ color: 'red' }}>*</span>
                            </strong>
                        </label>
                        <input type='password' 
                            name='password'
                            placeholder='Enter Password' 
                            onChange={handleInput}
                        />
                        {errors.password && <span className='error'>
                            {errors.password}
                        </span>}
                    </div>
                    <button type='submit' className='loginBtn'>Sign In</button>
                    <p>Forgot password?</p>
                </form>
            </div>
        </div>
    )
}

export default Login
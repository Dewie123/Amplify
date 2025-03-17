import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ValidateSignupValues, SubmitRegRequest } from '../controller/SignupController.js'

function Signup() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        confirm_password: ''
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

    const handleSignup = async (event) => {
        event.preventDefault();
        const validationErrors = ValidateSignupValues(values)
        setErrors(validationErrors);
        if(Object.values(validationErrors).every(error => error === "")) {
            try{
                await SubmitRegRequest(values);
                navigate('/');
            } catch(err){
                console.error("Signup Failed: ", err);
            }
        }
    }

    return(
        <div className="Signup">
            <div>
                <form action='' onSubmit={handleSignup}>
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

                    <div className='fields'>
                        <label htmlFor='confirm_password'>
                            <strong>
                                Confirm Password<span style={{ color: 'red' }}>*</span>
                            </strong>
                        </label>
                        <input type='password' 
                            name='confirm_password'
                            placeholder='Enter Password'
                            onChange={handleInput}
                        />
                        {errors.confirm_password && <span className='error'>
                            {errors.confirm_password}
                        </span>}
                    </div>
                    <button type='submit' className='signupBtn'>Signup</button>
                    <p>You are agree to our terms and policies</p>
                    
                    <p>Already have an account?&nbsp;
                        <Link to='/' 
                            className='register' 
                            style={{ color: 'blue' }}>
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup
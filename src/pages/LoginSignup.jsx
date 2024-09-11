import React from 'react'
import '../pages/css/loginsignup.css'

const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Name' name="" id="" />
                    <input type="email" placeholder='Email Addess' name="" id="" />
                    <input type="password" placeholder='password' name="" id="" />
                </div>
                <button>Continue</button>
                <p className='loginsignup-login'>Already have an account?<span>Login</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continueing agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup

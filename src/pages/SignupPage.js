import React from 'react';
import SignupForm from '../components/SignupForm';
import './SignupPage.css';

const SignupPage = () => {
    return(
        <div className="signup-container">
            <h2 className="signup-title">Sign Up</h2>
            <SignupForm />
        </div>
    );
};

export default SignupPage;
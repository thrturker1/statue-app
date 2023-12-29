import React from 'react';
import LoginForm from '../components/LoginForm';
import './LoginPage.css';
const LoginPage = () => {
    return(
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
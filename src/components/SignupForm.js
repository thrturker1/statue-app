import React, { useState } from 'react';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {

    };

    return(
        <form>
            <label>E mail:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>Password:
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <label>
                <button type="button" onClick={handleSignup}>Sign Up</button>
            </label>
        </form>
    );
};

export default SignupForm;
import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

    };

    return(
        <form>
            <label>Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>Password:
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <label>
                <button type="button" onClick={handleLogin}>Login</button>
            </label>
        </form>
    );
};

export default LoginForm;
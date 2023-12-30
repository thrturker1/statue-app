import { useState } from 'react';
import { Link } from 'react-router-dom';

export const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {

    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username:</label>
                            <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mb-3 text-center">
                            <button type="button" className="btn btn-primary" onClick={handleSignup}>
                                Sign Up
                            </button>
                            <Link to="/login" className="btn btn-link btn-md" role="button">
                                Registered?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

import './style.css';
import { LoginForm } from '../../components/LoginForm';

export const LoginPage = () => {
    return(
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <LoginForm />
        </div>
    );
};

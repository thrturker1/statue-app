import './style.css';
import { SignupForm } from '../../components/SignupForm';

export const SignupPage = () => {
    return(
        <div className="signup-container">
            <h2 className="signup-title">Sign Up</h2>
            <SignupForm />
        </div>
    );
};

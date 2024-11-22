import React, { useState } from 'react'
import './SignUp.css';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [message, setMessage] = useState('');
    const [passwordHintVisible, setPasswordHintVisible] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');

    const validatePassword = (password) => {
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordStrength(getPasswordStrength(newPassword));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setPasswordError('');
        setConfirmPasswordError('');
        setMessage('');

        if (!validatePassword(password)) {
            setPasswordError('Password does not meet the requirements.');
            return;
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match!');
            return;
        }

        // Simulate successful form submission
        setMessage('Signup successful!');
    };

    const getPasswordStrength = (password) => {
        if (password.length < 8) {
            return 'weak';
        }
        if (password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)) {
            return 'strong';
        }
        return 'medium';
    };

    return (
        <div className="block">
            <h2 className="signup-text">Sign Up</h2>
            <form id="signupForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        onFocus={() => setPasswordHintVisible(true)}
                        onBlur={() => setPasswordHintVisible(false)}
                        required
                    />
                    {passwordHintVisible && (
                        <div className="password-hint">
                            Password must be at least 8 characters long, and include at
                            least one uppercase letter, one lowercase letter, one
                            number, and one special character.
                        </div>
                    )}
                    {passwordError && <span className="error">{passwordError}</span>}
                    <div className="password-strength">
                        <div className={passwordStrength}></div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {confirmPasswordError && <span className="error">{confirmPasswordError}</span>}
                </div>
                <button type="submit">Signup</button>
            </form>
            {message && <p className="success">{message}</p>}
        </div>
    );
}

export default SignUp;

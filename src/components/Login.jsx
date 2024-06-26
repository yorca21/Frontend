import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import { FaUserTie, FaLock } from 'react-icons/fa';
import '../styles/loginStyles.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.login(username, password);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                alert('Successful login');
                onLogin(); 
                navigate('/');
            } else {
                alert('Login failed');
            }
        } catch (error) {
            alert('Login error');
        }
    };

    return (
        <div className='wrapper'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <label htmlFor='username'>Username:</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        placeholder=''
                        className='input-box'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        autoComplete='username'
                    />
                    <FaUserTie className={`icon ${username ? 'hidden': ''}`} />
                </div>
                <div className='input-container'>
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder=''
                        className='input-box'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete='current-password'
                    />
                    <FaLock className={`icon ${password ? 'hidden': ''}`} />
                </div>
                <div className='remember-fotgot'>
                    <label>
                        <input type='checkbox' /> Remember me
                    </label>
                    <a href='#'>Forgot password?</a>
                </div>
                <button type='submit'>Login</button>
                <div className='register-link'>
                    <p>
                        Don`t have an account? <a href='#'>Register</a>
                    </p>
                </div>
            </form>
        </div>
    );
};
Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

export default Login;

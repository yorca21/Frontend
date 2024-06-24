import { useState } from 'react';
import authService from '../services/authService';
import '../styles/registerStyles.css'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.register(username, password);
            if (response.data.success) {
                alert('Successful registration');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            alert('Registration error');
        }
    };

    return (
        <div className='wrapper'>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <label htmlFor="username">Username:</label>
                    <input
                        placeholder=''
                        className='input-box'
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />                    
                </div>
                <div className='input-container'>
                    <label htmlFor="password">Password:</label>
                    <input
                        placeholder=''
                        className='input-box'
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />                   
                </div>       
                <button type="submit">Sing ing</button>
            </form>
        </div>
    );
};

export default Register;

import React, { useState, useEffect } from 'react';
import init, { get_pass_hash } from './pkg/zk_wasm.js';
import './App.css';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const initializeWasm = async () => {
            await init();
        };
        initializeWasm();
    }, []);

    const handleRegister = async (e) => {
        e.preventDefault();
        const hashedPassword = get_pass_hash(password);
        localStorage.setItem(username, hashedPassword.join(',')); // Store as comma-separated string
        alert('Registration successful!');
    };

    return (
        <form onSubmit={handleRegister}>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username" 
                required 
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                required 
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default Registration;
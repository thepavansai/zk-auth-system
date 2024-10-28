import React, { useState, useEffect } from 'react';
import init, { generate_proof, verify_proof } from './pkg/zk_wasm.js';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const initializeWasm = async () => {
            await init();
        };
        initializeWasm();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        const storedHash = localStorage.getItem(username);

        if (storedHash) {
            const proof = generate_proof(username, password);
            console.log("Proof:", proof);
            console.log("Stored Hash:", storedHash);
            console.log("Username:", username);

            const isValid = verify_proof(proof, [storedHash], username);
            alert(isValid ? 'Login successful!' : 'Login failed!');
        } else {
            alert('User not found!');
        }
    };

    return (
        <form onSubmit={handleLogin}>
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
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
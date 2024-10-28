import React from 'react';
import Registration from './Registration';
import Login from './Login';
import './App.css'; 

const App = () => {
    return (
        <div>
            <h1>ZK-Based Authentication System</h1>
            <center><h2>Register</h2></center>
            <Registration />
            <center><h2>Login</h2></center>
            <Login />
        </div>
    );
};

export default App;
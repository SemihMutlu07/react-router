import React, { useState } from 'react';
import { login } from 'blog-app\src\utils\api.js';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]= useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const user = await login(email, password);
            console.log('Logged in user:', user);
        } catch (err) {
            setError("Failed to log in. Please check your credentials.")
        }
    };

    return (
        <div className='container mx-auto p4'>
            <h1 className="text-4xl font-bold mb-4">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Email:</label>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} required
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                    />
                </div>
                <div className="mb-4">
                    <label className="block, text-gray-700 text-sm font-bold mb-2">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                    />
                </div>
                <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
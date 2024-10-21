import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from 'D:/coding/react-router/blog-app/src/utils/api';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]= useState("");
    const navigate = useNavigate(); //??
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await login(email, password);
            console.log('Logged in user:', user);
            localStorage.setItem('user', JSON.stringify(user)) //saving user info in local storage
            navigate('./Home.js')
        } catch (err) {
            setError("Failed to log in. Please check your credentials.")
        }
    };

    return (
        <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Login</h1>
        {error && <p className='text-red-500 text-center'>{error}</p>}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Login
                </button>
            </div>
        </form>
    </div>
);
};

export default Login;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-white">My Blog</Link>
                <div>
                    {user ? (
                        <>
                            <Link to="/create-post" className='text-white mr-4'>Create Post</Link>
                            <div className='relative inline-block text-left'>
                                <button className='text-white mr-4'>{user.name}</button>
                                <div className='absolute right-0 w-56 mt-2 bg-white rounded-md shadow-lg'>
                                    <Link to="/profile" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'>Profile</Link>
                                    <button onClick={handleLogout} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-white mr-4">Login</Link>
                            <Link to="/register" className="text-white mr-4">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};


export default Header;

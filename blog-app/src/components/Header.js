import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">My Blog</Link>
                <nav>
                    <Link to="/create-post" className="mr-4">Create</Link>
                    <Link to="/post-list" className="mr-4">Post List</Link>
                    <Link to="/login" className="mr-4">Login</Link>
                    <Link to="/register">Register</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;

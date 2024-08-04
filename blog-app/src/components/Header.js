import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='bg-gray-800'>
            <nav className='container mx-auto flex justify-between'>
                <Link to="/" className='text-xl font-bold'>My Blog FUCK YEAH</Link>
                <div>
                    <Link to="/create-post" className='mr-4'>Create
                    </Link>
                    <Link to="/post-list" className='mr-4'>Post List</Link>
                    <Link to="/login" className='mr-4'>Login</Link>
                    <Link to="/register" className='mr-4'>Register</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;

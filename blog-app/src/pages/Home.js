import React from 'react';
import { Link } from'react-rotuer-dom';

const Home = () => {
    return (
        <div>
            <div className='container mx-auto p-4'>
                <h1 className="text-4xl font-bold mb-4">Welcome to the Blog</h1>
                <p className="mb-4">Read and share your thoughts with the world.</p>
                <Link to="/posts" className="text-blue-500 hover:underline">View Posts</Link>
            </div>
        </div>
    );
}

export default Home;

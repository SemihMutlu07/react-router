import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({post, onDelete, onEdit}) => {
    return (
        <div className='mb-4 bg-white p-4 rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold'>{post.title}</h2>
            {post.image && <img src={post.image} alt={post.title} className='mb-4 w-full h-48 object-cover' />}
            <p className='text-gray-700'>{post.content}</p>
            <div className='mt-4 flex justify-between'>
                <button onClick={() => onEdit(post.id)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Edit
                </button>
                <button onClick={() => onDelete(post.id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default PostItem;

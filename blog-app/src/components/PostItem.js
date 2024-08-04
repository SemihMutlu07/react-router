import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({post}) => {
    return (
        <div>
            <div className='border p-4 mb-4'>
                <h2 className='text-2xl font-bold'>{post.title}</h2>
                <p>{post.content}</p>
                <Link to={`/edit-post/${post.id}`} className='text--blue-500 hover:underline'>Edit</Link>
            </div>
        </div>
    );
}

export default PostItem;

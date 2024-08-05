import React, { useEffect, useState } from 'react';
import { fetchPost, deletePost } from 'D:/coding/react-router/blog-app/src/utils/api';
import PostItem from 'D:/coding/react-router/blog-app/src/components/PostItem';

const PostList = () => {
    const [posts, setPosts ] = useState([]);

    useEffect(() => {
        //fetching
    const getPosts = async () => {
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            }
        };

        getPosts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deletePost(id);
            setPosts(posts.filter(post => post.id !== id)); // Remove deleted post from the state
        } catch (error) {
            console.error('Failed to delete post:', error);
        }
    }; 
        // alttaki örnek çok fazla iyi, direkt içine if statemnet koyup ona göre yazdı yapacağını
    return ( 
        <div className='container mx-auto p-4'>
            <h1 className='text-4xl font-bold mb-4'>Posts</h1>
            {posts.length > 0 ? (
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <h2 className='text-2xl'>{post.title}</h2>
                            <p>{post.content}</p>
                            <button onClick={() => handleDelete(post.id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No posts available</p>
            )}
        </div>
    )

};

export default PostList;
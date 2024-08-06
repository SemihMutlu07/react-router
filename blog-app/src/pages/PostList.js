import React, { useEffect, useState } from 'react';
import { fetchPosts, deletePost } from 'D:/coding/react-router/blog-app/src/utils/api';
import { useNavigate } from 'react-router-dom';
import PostItem from 'D:/coding/react-router/blog-app/src/components/PostItem';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
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
            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
            console.error('Failed to delete post:', error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/edit-post/${id}`);
    }

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-4xl font-bold mb-4 text-center'>Posts</h1>
            {posts.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {posts.map(post => (
                        <PostItem key={post.id} post={post} onDelete={handleDelete} onEdit={handleEdit} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600">No posts available</p>
            )}
        </div>
    );
};

export default PostList;
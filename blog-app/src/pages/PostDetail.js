import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetail = () => {
    const { id } = useParams();
    const [posts, setPosts ] = useStats(null); //tıkladığı postun içeriğini görecek, öncesinde null olması lazım, boş da bırakabilirdik??
    useEffect(() => { 
        const FetchPost = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching post:', error)
            }
        };

        fetchPost(); //calllling dokkaebi
    }, [id]); // if id changes, it will re-run, pretty clever !!!!

    if(!post) return <div>Loading...</div>

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;
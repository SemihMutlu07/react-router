import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import postData from 'D:\coding\react-router\blog-app\src\assets\data.json';  

const PostList = () => {
    const [posts, setPosts ] = useState([]);

    useEffect(() => {
        //fetching
        setPosts(postData);
    }, []);

    return ( //ilerde denk gelirsen alttaki Link ve içeriği ile daha fazla ilgilen, önemli ve tam anlamıyla anlamadım
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <Link to={`/post/${post.id}`}>{post.title}</Link>                
                </div>
            ))}
        </div>
    )

};

export default PostList;
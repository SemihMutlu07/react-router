import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const EditPost = () => {
    const { id } = useParams(); //retrieving id from url .D
    const history = useHistory(); //Use for redirecting after successful edit???????
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true); //handling loading????

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data = await response.json();
                setTitle(data.title);
                setContent(data.body);
                setLoading(false); //
            } catch (error) {
                console.log('Error fetching post: ', error);
                setLoading(false); //setLoading false even if there is an error
            }
        };

        fetchPost();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    body: content,
                }),
            });
            
            if (response.ok) {
                alert('POst updated successfully!');
                history.push(`/post/${id}`); //redirecting post detail?
            } else {
                alert('Failed to update post..');
            }
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    if (loading) return <div>Loading...</div>
    
    return (
        <div>
            <h1>Edit Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} required ///???
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <input
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)} required
                    />
                </div>
                <button type='submit'>Update Post</button>
            </form>
        </div>
    );
};

export default EditPost;
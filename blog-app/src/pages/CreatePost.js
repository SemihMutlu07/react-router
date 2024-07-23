import React, { useState } from 'react';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState("");

    const handleSubmit =  (e) => {
        e.preventDefault(); // we will mock the server anyways
        console.log('Creating Post: ', title, content);
    };

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content: </label>
                    <input
                        type='text'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;
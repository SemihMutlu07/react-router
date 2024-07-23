import React, { useState } from 'react';

const EditPost = () => {
    const [title, SetTitle] = useState("");
    const [title, SetTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Post has been updated');
    };

    return (
        <div></div>
    )
};
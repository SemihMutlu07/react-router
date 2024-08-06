const API_URL = 'https://your-backend-api.com';

// Asynchronous function to handle user login
export const login = async (email, password) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error("Failed to log in");
        }

        const data = await response.json();
        return data; // Return the parsed JSON data
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

// Asynchronous function to handle user registration
export const register = async (name, email, password) => {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (!response.ok) {
            throw new Error("Failed to register");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

// Asynchronous function to create a new post
export const createPost = async (post) => {
    try {
        const response = await fetch(`${API_URL}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post),
        });

        if (!response.ok) {
            throw new Error("Failed to create post");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

// Asynchronous function to fetch all posts
export const fetchPosts = async () => {
    try {
        const response = await fetch(`${API_URL}/posts`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

// Asynchronous function to fetch a post by ID
export const fetchPostById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/posts/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch post');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

// Asynchronous function to update a post
export const updatePost = async (id, post) => {
    try {
        const response = await fetch(`${API_URL}/posts/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post),
        });

        if (!response.ok) {
            throw new Error("Failed to update post");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

// Asynchronous function to delete a post
export const deletePost = async (id) => {
    try {
        const response = await fetch(`${API_URL}/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete post');
        }
        return true; // Return true if delete is successful
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

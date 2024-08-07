const API_URL = 'http://localhost:8000'; // Update with your server URL

export const login = async (email, password) => {
    try {
        const response = await fetch(`${API_URL}/users?email=${email}&password=${password}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error("Failed to log in");
        }

        const users = await response.json();
        if (users.length === 0) {
            throw new Error('Invalid email or password');
        }

        return users[0]; // Return first matching user.
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const register = async (name, email, password) => {
    try {
        const response = await fetch(`${API_URL}/users`, {
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

export const createPost = async (postData) => {
    try {
        const response = await fetch(`${API_URL}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData), // Sending JSON data
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Response not OK:', response.status, response.statusText, errorText); // Log detailed error
            throw new Error("Failed to create post");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error in createPost:', error); // Log detailed error
        throw error;
    }
};

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

export const updatePost = async (id, postData) => {
    try {
        const response = await fetch(`${API_URL}/posts/${id}`, {
            method: "PUT",
            body: postData, // FormData handles the headers
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
        return true; 
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

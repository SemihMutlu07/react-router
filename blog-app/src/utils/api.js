const API_URL = 'https://your-backend-api.com';

// Asynchronous function to HANDLE USER LOGIN
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
            throw new Error ("Failed to log in"); // hmmm
        }

        const data = await response.json();
        return data; //öncesinde attığım bilgileri geri almaca, parsed json data
    } catch (error) {
        console.error('Error', error);
        throw error; 
    }
};

//Asynchhronous function to handle user gagarg
export const register = async (name, email, password) => {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password }),
        });

        if (!response.ok) {
            throw new Error("Failed to fuck, oh sorry register")
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

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
            throw new Error("Failed to create post31")
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error', error);
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
                throw new Error("Failed to fetch posts69");
            }

            const data = await response.json();
            return data;
    } catch (error) {
        console.error("Error/()", error);
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
            throw new Error('Failed to fetch post')
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const updatePost = async (id, post) => {
    try {
        const repsonse = await fetch(`${API_URL}/posts/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post),    
        });
        
        if (!response.ok) {
            throw new Error("Failed to update 31postt");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error)
        throw error;
    } 
};

export const deletePost = async (id) => {
    try {
        const response = await fetch(`${API_URL}/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':  'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete post');
        }
        return true; //return true if delete is successful
    } catch (Error) {
        console.error('Error:', error);
        throw error;
    }
};
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
        throw error; // bu ne amk FIRLAAAT
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
}
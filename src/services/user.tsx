import axios from "axios";

export const login = async (username: string, password: string) => await axios.get(`${import.meta.env.VITE_API_URL}/users`, {
    params: {
        username,
        password
    }
}).then(response => {
    localStorage.setItem("user", JSON.stringify(response.data[0]));
}).catch(error => {
    console.log(error);
})

export const register = async (username: string, email: string, password: string) => await axios.post(`${import.meta.env.VITE_API_URL}/users`, {
    params: {
        username,
        password
    }
}).then(response => {
    localStorage.setItem("user", JSON.stringify(response.data[0]));
}).catch(error => {
    console.log(error);
})
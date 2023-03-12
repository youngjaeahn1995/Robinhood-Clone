import axios from "axios";

export const loginAPI = async (username: string, password: string) => await axios.post(`${import.meta.env.VITE_API_URL}/users/signin`, {
    username,
    password
}).then(response => {
    console.log("response from spring: ", response);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
});

export const registerAPI = async (username: string, email: string, password: string) => await axios.post(`${import.meta.env.VITE_API_URL}/users/register`, {
    username,
    email,
    password
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
})

const AuthService = {
    loginAPI,
    registerAPI
};

export default AuthService;
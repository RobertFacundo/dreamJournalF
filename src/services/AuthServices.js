import axios from "axios";

const URL_B = import.meta.env.VITE_API_URL;

export const AuthServices = async (type, credentials) => {
    try {
        console.log(type, 'log del authservice')
        console.log(credentials, 'log del authservice!!')
        const response = await axios.post(`${URL_B}auth/${type}`, credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response, 'log del services');
        return response.data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}
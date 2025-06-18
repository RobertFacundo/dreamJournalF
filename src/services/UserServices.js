import axios from "axios";

const URL_B = import.meta.env.VITE_API_URL;

export const getMeService = async (token) => {
    try {
        const response = await axios.get(`${URL_B}auth/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        console.log(response, 'log del me service');
        return response.data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const updateUserService = async (token, updateData) => {
    try {
        const response = await axios.patch(`${URL_B}auth/update`, updateData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error updating user', error)
        throw error;
    }
};
import axios from '../config/axiosConfig'

export const AddDreamService = async (dreamData) => {
    try {
        const response = await axios.post(`/dreams`, dreamData);
        console.log(response, 'log del dreamservice')
        return response.data;
    } catch (error) {
        console.error('Error adding dream', error);
        throw error;
    }
}

export const getdreamsByUserService = async () => {
    try {
        const response = await axios.get('/dreams');
        console.log(response, 'log del gdbus')
        return response.data;
    } catch (error) {
        console.error('Error fetching dreams', error)
        throw error;
    }
}
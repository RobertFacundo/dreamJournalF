import { useState } from "react";
import { AddDreamService } from '../services/DreamServices';

export const useAddDream = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const addDream = async (dreamData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            await AddDreamService(dreamData);
            setSuccess(true);
        } catch (error) {
            setError(error.message || 'Error adding dream');
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, success, addDream };
}
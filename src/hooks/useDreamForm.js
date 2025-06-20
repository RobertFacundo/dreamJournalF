import { useState } from "react";
import { useAddDream } from "./useAddDream";

export const useDreamForm = () => {
    const [formData, setFormData] = useState({
        content: '',
        nightmare: false,
        lucidity: 5,
        mood: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const { addDream, loading, error, success } = useAddDream();


    const validate = () => {
        const errors = {};
        if (!formData.content.trim()) errors.content = 'Content is required';

        return errors;
    }

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        const errors = validate();
        setFormErrors(errors);
        if (Object.keys(errors).length > 0) return false;

        console.log(formData, 'log del handle submitformdata')

        const dreamToSend = {
            ...formData,
            date: new Date().toISOString().split('T')[0],
        };
        console.log(dreamToSend, 'log del handlesubmit dreamtosend')


        try {
            await addDream(dreamToSend);
            if (success) {
                setFormData({
                    content: '',
                    nightmare: false,
                    lucidity: 5,
                    mood: '',
                })
            }
            return true;
        } catch (error) {
            console.error('Unexpected error during dream submission:', err);
            return false;
        }
    };

    return {
        formData,
        formErrors,
        loading,
        error,
        success,
        handleChange,
        handleSubmit
    }
}
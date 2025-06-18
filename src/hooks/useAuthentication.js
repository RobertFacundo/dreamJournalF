import { useCallback, useState } from "react";
import { AuthServices } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";

export function useAuth() {
    const [isLoginView, setIsLoginView] = useState(false);
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const switchToLogin = useCallback(() => setIsLoginView(true), []);
    const switchToRegister = useCallback(() => setIsLoginView(false), []);

    const handleChange = useCallback((e) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }, []);

    const navigate = useNavigate()



    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        setLoading(true)
        setError(null);

        const type = isLoginView ? 'login' : 'register';

        console.log(type, 'log del hook auth')
        try {
            const response = await AuthServices(type, credentials);

            const { user, acces_token } = response;
 
            if (user) {
                localStorage.setItem('user', JSON.stringify(user))
            }

            if (acces_token) {
                localStorage.setItem('token', acces_token)
            }


             console.log(user, 'log del handlesubmit');
             console.log(acces_token, 'log del handlesubmit');

            navigate('/Home')
            return { user, acces_token }
        } catch (error) {
            console.error(error)
            throw error;
        } finally {
            setLoading(false)
        }
    }, [isLoginView, credentials, navigate]);

    return {
        isLoginView,
        credentials,
        switchToLogin,
        switchToRegister,
        handleChange,
        handleSubmit,
        loading,
        error,
    }
}
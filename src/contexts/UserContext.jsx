import { createContext, useEffect, useCallback, useState } from "react";
import { getMeService } from "../services/UserServices";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUser = useCallback(async () => {
        const token = localStorage.getItem('token');

        if (!token) {
            setLoading(false)
            return;
        }

        try {
            const userData = await getMeService(token);
            setUser(userData);
        } catch (error) {
            console.error('Error fetching user', error);
            setError('Session expired or user not found');
            localStorage.removeItem('token');
            setUser(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        fetchUser();
    }, [fetchUser]);


    return (
        <UserContext.Provider value={{ user, setUser, loading, error }}>
            {children}
        </UserContext.Provider>
    )
}
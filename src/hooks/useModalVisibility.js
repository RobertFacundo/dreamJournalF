import { useState, useEffect } from 'react';

export const useModalVisibility = () => {
    const storedUser = localStorage.getItem('user');
    const user = storedUser ? JSON.parse(storedUser) : null;

    const [showWelcomeModal, setShowWelcomeModal] = useState(!user?.hasSeenWelcomeModal);

    useEffect(() => {
        const handleStorageChange = () => {
            const updateduser = JSON.parse(localStorage.getItem('user'));
            setShowWelcomeModal(!updateUser?.hasSeenWelcomeModal);
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    return { showWelcomeModal, setShowWelcomeModal };
}
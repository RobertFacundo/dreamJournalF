import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { updateUserService } from "../services/UserServices";

export const useWelcomeModal = () => {
    const {setUser, loading } = useContext(UserContext);
    const [closing, setClosing] = useState(false);

    const user = localStorage.getItem('user')
    console.log(user, 'log user hook wm')
   
    const handleClose = async () => {
        const token = localStorage.getItem('token');
        if (!token || !user) return;

        console.log(token, 'log del usewelcomemodal')
        try {
            setClosing(true);
            const updateUser = await updateUserService(token, { hasSeenWelcomeModal: true });
            setUser(updateUser);
            localStorage.setItem('user', JSON.stringify(updateUser))
        } catch (error) {
            console.error('Error updating user', error);
        } finally {
            setClosing(false);
        }
    };

    return {handleClose, closing, user };
}
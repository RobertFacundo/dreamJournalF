import { useEffect, useState } from "react";
import { getdreamsByUserService } from "../services/DreamServices";

export const useProfile = () => {
    const [dreams, setDreams] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [loading, setLoading] = useState(true);

    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    useEffect(() => {
        const fetchDreams = async () => {
            try {
                const data = await getdreamsByUserService();

                console.log(data, 'data del useprofilehook')

                const filtered = data.filter((dream) => {
                    const date = new Date(dream.date);
                    return (
                        date.getFullYear() === currentYear &&
                        date.getMonth() === currentMonth
                    );
                });
                console.log(filtered, 'log filtered dreams')
                setDreams(filtered);
            } catch (error) {
                console.error('Error in useprofile', error)
            } finally {
                setLoading(false);
            }
        };
        fetchDreams()
    }, [currentMonth, currentYear]);

    const handleDayClick = (date) => {
        setSelectedDate(date)
    }

    const dreamsForSelectedDate = selectedDate
        ? dreams.filter((dream) => {
            return dream.date === selectedDate.toISOString().split('T')[0];
        })
        : [];

    return {
        dreams,
        selectedDate,
        dreamsForSelectedDate,
        handleDayClick,
        loading
    }
}
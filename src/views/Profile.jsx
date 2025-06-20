import { NavBar } from "../components/NavBar/NavBar";
import { useProfile } from "../hooks/useProfile";
import { DreamCalendar } from "../components/Profile/DreamCalendar";
import { DreamSideBar } from "../components/Profile/DreamSideBar";
import './Profile.scss'

export const Profile = () => {
    const {
        dreams,
        selectedDate,
        dreamsForSelectedDate,
        handleDayClick,
        loading
    } = useProfile();
    return (
        <>
            <NavBar />
            <div className="profile-container">
                <div className="dream-sidebar">
                    <DreamSideBar
                        dreamsForSelectedDate={dreamsForSelectedDate}
                    />
                </div>
                <div className="calendar-container">
                    <DreamCalendar
                        dreams={dreams}
                        selectedDate={selectedDate}
                        handleDayClick={handleDayClick}
                    />
                </div>
            </div>
        </>
    );
};
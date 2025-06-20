import { MoonModal } from "../components/Home/MoonModal/MoonModal";
import { HomeLayout } from "../components/Home/HomeLayout";
import { WelcomeModal } from "../components/Home/WelcomeModal";
import { NavBar } from "../components/NavBar/NavBar";
import { useModalVisibility } from "../hooks/useModalVisibility";
import './Home.scss';

export const Home = ({showMoonModal, setShowMoonModal}) => {
    const { showWelcomeModal, setShowWelcomeModal } = useModalVisibility();
    
    return (
        <>
            <NavBar />
            {showWelcomeModal && <WelcomeModal onClose={() => setShowWelcomeModal(false)} />}
            <HomeLayout />
            {showMoonModal && <MoonModal onClose={()=>setShowMoonModal(false)}/>}
        </>
    );
};
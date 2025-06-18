import { WelcomeModal } from "../components/Home/WelcomeModal";
import { NavBar } from "../components/NavBar/NavBar";
import { useModalVisibility } from "../hooks/useModalVisibility";

export const Home = () => {
    const { showWelcomeModal, setShowWelcomeModal } = useModalVisibility();
    return (
        <>
            <NavBar />
            <h1>Home view</h1>
            {showWelcomeModal && <WelcomeModal onClose={() => setShowWelcomeModal(false)} />}
        </>
    );
};
import { useWelcomeModal } from "../../hooks/useWelcomeModal"
import './WelcomeModal.scss';

export const WelcomeModal = ({ onClose }) => {
    const { handleClose, closing } = useWelcomeModal();

    const handleClick = async () => {
        await handleClose();
        onClose();
    };

    return (
        <div className="welcome-wrapper">
            <div className="welcome-container">
                <h2>Welcome to Dream Journal! 🌙</h2>
                <p>
                    In Dream Journal, you can write down your dreams, reflect on them, analyze recurring themes,
                    and discover what your inner self might be trying to tell you.<br /> <br /> Let your imagination and intuition flow freely!
                </p>
                <button className="welcome-button" onClick={handleClick} disabled={closing}>
                    {closing ? 'Closing...' : 'Let’s go!'}
                </button>
            </div>
        </div>
    )
}
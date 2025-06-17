import './ParallaxBackground.scss';
import { useParallaxBackground } from "../hooks/useParallaxBackground";

export const ParallaxBackground = ({ onParallaxComplete }) => {
    const { moonOpacity } = useParallaxBackground(onParallaxComplete)

    return (
        <div className="parallax-container">
            <img
                src="/dreamJournalBG.png"
                alt="Sleeping City"
                className="city-background"
            />

            <img src="/moon.png" alt="moon" className="moon" style={{ opacity: moonOpacity }} />
            <div className="scroll-message">
                <p className="scroll-text">Make the moon appear...</p>
                <div className="scroll-icon">
                    <svg width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="22" height="46" rx="11" stroke="white" strokeWidth="2" />
                        <circle cx="12" cy="12" r="2" fill="white">
                            <animate attributeName="cy" values="12;36;12" dur="2s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </div>
            </div>
        </div>
    )
}
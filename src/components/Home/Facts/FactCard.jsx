import './FactCard.scss';

export const FactCard = ({ title, description, fullWidth = false }) => {
    return (
        <div className={`fact-card ${fullWidth ? 'full-width' : ''}`}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
};
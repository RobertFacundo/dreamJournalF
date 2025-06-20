import './DreamSideBar.scss';

export const DreamSideBar = ({ dreamsForSelectedDate }) => {
    return (
        <div className='dream-sidebar-content'>
            {dreamsForSelectedDate.map((dream) => (
                <div key={dream.id} className='dream-card'>
                    <p className='dream-date'>
                        {new Date(dream.date).toLocaleDateString()}
                    </p>
                    <p className='dream-content'>{dream.content}</p>
                    <div className='dream-meta'>
                        <span>🧠 Lucidity: {dream.lucidity}</span>
                        <span>You felt: {dream.mood || ''}</span>
                        {dream.nightmare && <span> 😱 It was a nightmare!</span>}
                    </div>
                </div>
            ))}
        </div>
    )
}
import './RemInfo.scss';

export const RemInfo = () => {
    return (
        <div className='rem-info'>
            <div className='rem-image'>
                <img src="/Cycles_of_Sleep.webp" alt="Sleep Cycle" />
            </div>
            <div className='rem-text'>
                <p>REM sleep is the stage where most dreams occur and the brain is highly active.</p>
                <p>It plays a critical role in memory consolidation and emotional regulation.</p>
            </div>
        </div>
    )
}
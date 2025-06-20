import './MoonModal.scss';
import { useDreamForm } from '../../../hooks/useDreamForm';

export const MoonModal = ({ onClose }) => {
    const {
        formData,
        formErrors,
        loading,
        error,
        success,
        handleChange,
        handleSubmit,
    } = useDreamForm();

    const moodOptions = [
        { emoji: '😴', name: 'sleepy' },
        { emoji: '😊', name: 'happy' },
        { emoji: '😟', name: 'worried' },
        { emoji: '😠', name: 'angry' },
        { emoji: '😢', name: 'sad' },
        { emoji: '😎', name: 'cool' },
        { emoji: '😇', name: 'angelic' },
        { emoji: '🤔', name: 'thinking' },
        { emoji: '😍', name: 'loving' },
        { emoji: '😱', name: 'shocked' },
    ];
    const lucidityLabels = [
        'None',
        'Very Low',
        'Low',
        'Somewhat Low',
        'Medium-Low',
        'Medium',
        'Medium-High',
        'High',
        'Very High',
        'Almost Full',
        'Full'
    ];

    const lucidityText = lucidityLabels[formData.lucidity] || 'Unknown';

    return (
        <div className='moon-modal-overlay' onClick={onClose}>
            <div className='moon-modal-content' onClick={e => e.stopPropagation()}>
                 <h2>{success ? 'Dream added successfully' : 'Write your dream'}</h2>
                 <button className='moon-modal-close ' onClick={onClose}>
                     &times;
                 </button>
                {success ? (
                    <p className="success">
                        You can view your dreams in your profile
                    </p>
                ) : (
                    <>
                        <label >
                            <textarea
                                value={formData.content}
                                onChange={(e) => handleChange('content', e.target.value)}
                            />
                            {formErrors.content && <span className='error'>{formErrors.content}</span>}
                        </label>
                        <label className="checkbox-label">
                            Did it feel like a nightmare?
                            <div className="toggle-switch">
                                <input
                                    type="checkbox"
                                    checked={formData.nightmare}
                                    onChange={(e) => handleChange('nightmare', e.target.checked)}
                                    id="nightmare-toggle"
                                />
                                <span className="toggle-switch-slider"></span>
                            </div>
                        </label>
                        <label>
                            How aware were you? <br /><br />{lucidityText}
                            <input
                                type='range'
                                min={0}
                                max={10}
                                value={formData.lucidity}
                                onChange={(e) => handleChange('lucidity', Number(e.target.value))}
                            />
                        </label>
                        <label>
                            How did you feel?
                            <div className='mood-picker'>
                                {moodOptions.map(({ emoji, name }) => (
                                    <button
                                        key={name}
                                        type='button'
                                        className={formData.mood === name ? 'selected' : ''}
                                        onClick={() => handleChange('mood', name)}
                                        aria-label={`Select mood ${name}`}
                                    >
                                        {emoji}
                                    </button>
                                ))}
                            </div>
                        </label>
                        <button className='submit-button' onClick={handleSubmit} disabled={loading}>
                            {loading ? 'Adding...' : 'Add Dream'}
                        </button>
                        {error && <p className='error'>Error: {error}</p>}
                    </>
                )}
            </div>
        </div>
    )
}
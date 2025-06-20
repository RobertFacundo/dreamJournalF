import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import './DreamCalendar.scss';

export const DreamCalendar = ({dreams, selectedDate, handleDayClick})=>{
    const dreamDates = dreams.map(d => d.date);

    const tileContent = ({date, view})=>{
        if(view === 'month'){
            const formatted = date.toISOString().split('T')[0];
            if(dreamDates.includes(formatted)){
                return <span className='moon-icon'>🌙</span>
            }
        }
        return null;
    };

    return (
        <div className='dream-calendar-container'>
            <Calendar
                onClickDay={handleDayClick}
                value={selectedDate}
                tileContent={tileContent}
            />
        </div>
    )
}
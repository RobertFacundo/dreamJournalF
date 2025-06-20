import { FactCard } from "./FactCard";
import './DreamyFacts.scss';

const facts = [
    {
        title: 'Lucid Dreaming',
        description: 'When you become aware that you are dreaming and control your dreams.',
    },
    {
        title: 'Sleep Paralysis',
        description: 'A state during waking up or falling asleep where you cannot move your body.',
    },
    {
        title: 'REM Sleep',
        description: 'The stage of sleep where most dreaming occurs, important for memory and brain health.',
    },
    {
        title: 'Hypnagogic State',
        description: 'The transition state between wakefulness and sleep, often accompanied by vivid imagery.',
    },
    {
        title: 'False Awakening',
        description: 'A dream where you believe you have woken up, but are still dreaming.',
    },
    {
        title: 'Sleepwalking',
        description: 'Performing complex behaviors while still asleep, typically during non-REM sleep.',
    },
    {
        title: 'Dream Incubation',
        description: 'The technique of consciously intending a dream topic before sleeping.',
    },
    {
        title: 'Recurring Dreams',
        description: 'Dreams that repeat over time with little variation.',
    },
    {
        title: 'Nightmares',
        description: 'Disturbing dreams that cause the dreamer to wake up feeling anxious or frightened.',
    },
    {
        title: 'Oneironaut',
        description: 'A person who explores dream worlds, especially through lucid dreaming techniques.',
    }
];

export const DreamyFacts = ({ start = 0, end = facts.length }) => {
    const visibleFacts = facts.slice(start, end);

    return (
        <div className="dreamy-facts">
            {visibleFacts.map((fact, idx) => (
                <FactCard key={idx} title={fact.title} description={fact.description} fullWidth={idx === 2} />
            ))}
        </div>
    );
};

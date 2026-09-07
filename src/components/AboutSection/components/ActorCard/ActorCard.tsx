import './ActorCard.css'

interface ActorCardProps {
    icon?: string;
    title?: string;
    text?: string;
}

export default function ActorCard({ icon, title, text }: ActorCardProps) {
    return (
        <div className="actor-card">
            <img className='actor-img' src={icon} />
            <div className='actor-description__wrapper'>
                <h3 style={{ color: 'white', fontSize: '14px' }} className='actor-title'>{title}</h3>
                <h3 style={{ color: '#9CA4AB', fontSize: '12px' }} className='actor-text'>{text}</h3>
            </div>
        </div >
    )
}
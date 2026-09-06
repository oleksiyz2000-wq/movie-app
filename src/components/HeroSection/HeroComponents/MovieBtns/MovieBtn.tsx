import './MovieBtn.css'

interface MovieBtnsProps {
    text?: string | null;
    isPrimary?: boolean;
    icon?: React.ReactNode;
    isSmall?: boolean;
}

export default function MovieBtn({ text, isPrimary, icon, isSmall }: MovieBtnsProps) {
    return (
        <button
            className={`movie-btn 
              ${isPrimary ? 'movie-btn--primary' : ''}
              ${isSmall ? 'movie-btn--small' : ''}
              
            `}
        >
            {text}
            {icon}
        </button>
    )
}
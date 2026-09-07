import './MovieBtn.css'

interface MovieBtnsProps {
    children?: React.ReactNode;
    isPrimary?: boolean;
    icon?: React.ReactNode;
    isSmall?: boolean;
}

export default function MovieBtn({ children, isPrimary, icon, isSmall }: MovieBtnsProps) {
    return (
        <button
            className={`movie-btn 
              ${isPrimary ? 'movie-btn--primary' : ''}
              ${isSmall ? 'movie-btn--small' : ''}
              
            `}
        >   
            {icon}
            {children}
        </button>
    )
}
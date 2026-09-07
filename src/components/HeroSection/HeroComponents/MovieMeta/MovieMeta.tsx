import './MovieMeta.css';

interface MovieMetaProps {
    children: React.ReactNode;
    isPrimary?: boolean;
}

export default function MovieMeta({ children, isPrimary }: MovieMetaProps) {
    return (
        <h3 className={`movie-title ${isPrimary ? 'movie-title--primary' : ''}`}>
            {children}
        </h3>
    )
}
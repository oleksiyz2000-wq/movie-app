import './MovieMeta.css';

interface MovieMetaProps {
    text: string;
    isPrimary?: boolean;
}

export default function MovieMeta({ text, isPrimary }: MovieMetaProps) {
    return (
        <h3 className={`movie-title ${isPrimary ? 'movie-title--primary' : ''}`}>
            {text}
        </h3>
    )
}
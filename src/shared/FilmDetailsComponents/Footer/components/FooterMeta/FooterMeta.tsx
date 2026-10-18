import './FooterMeta.css'

interface FooterMetaProps {
  link: string;
  content: string;
}

export default function FooterMeta({ link, content }: FooterMetaProps) {
  return (
    <a className="meta-link" href={link}>{content}</a>
  )
}
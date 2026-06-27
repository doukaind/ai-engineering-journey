import type { Post } from '../../data/posts'

const fmt = new Intl.DateTimeFormat('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
})

interface PostCardProps {
    post: Post;
    onClick: (post: Post) => void
}

export const PostCard = ({post, onClick}: PostCardProps) => {
    return (
        <article className="post-card" onClick={() => onClick(post)} tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClick(post)}>
            <div className="post-meta">
                <span className="post-topic">{post.topic}</span>
            </div>
            <span className="post-data">{fmt.format(new Date(post.date))}</span>
            <span>{post.readTime} min czytania</span>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-excrpt">{post.excerpt}</p>
            <span className="post-cta">Czytaj dalej →</span>
        </article>
    )
}
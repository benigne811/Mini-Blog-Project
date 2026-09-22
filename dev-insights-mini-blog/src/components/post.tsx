import { memo } from 'react';
import './Post.css';
import type { PostType } from '../types/post';

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  const postedDate = new Date(post.date);
  const now = new Date();

  const hoursSincePosted =
    (now.getTime() - postedDate.getTime()) / (1000 * 60 * 60);

  const isNew = hoursSincePosted >= 0 && hoursSincePosted <= 24;
  const isFeaturedAuthor = post.author === 'Benigne';

  return (
    <article
      className={`post ${isFeaturedAuthor ? 'post--featured' : ''}`}
    >
      <div className="post-header">
        <h3 className="post-title">{post.title}</h3>

        {isNew && <span className="new-badge">New!</span>}
      </div>

      <p className="post-meta">
        By {post.author} • {postedDate.toLocaleDateString()}
      </p>

      <p className="post-content">
        {post.content.split(' ').slice(0, 10).join(' ')}...
      </p>
    </article>
  );
}

export default memo(Post);
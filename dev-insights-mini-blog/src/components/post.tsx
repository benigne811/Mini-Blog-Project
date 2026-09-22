import './Post.css';

import type { PostType } from '../types/post';

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  return (
    <article className="post">
      <h3 className="post-title">{post.title}</h3>

      <p className="post-meta">
        By {post.author} • {post.date}
      </p>

      <p className="post-content">
  {post.content.split(' ').slice(0, 10).join(' ')}...
</p>
    </article>
  );
}

export default Post;
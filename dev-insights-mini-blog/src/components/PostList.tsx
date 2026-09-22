import './PostList.css';
import Post from './post';
import type { PostType } from '../types/post';

function PostList() {
  const posts: PostType[] = [
    {
      id: 1,
      title: 'Getting Started with TypeScript',
      author: 'Benigne',
      content:
        'TypeScript helps developers write safer and more maintainable JavaScript applications.',
      date: '2026-09-22',
    },
    {
      id: 2,
      title: 'Understanding React Components',
      author: 'Alice',
      content:
        'React components allow developers to break an application into smaller reusable pieces.',
      date: '2026-09-20',
    },
    {
      id: 3,
      title: 'Why Developers Use Git',
      author: 'David',
      content:
        'Git helps developers track changes and collaborate effectively on software projects.',
      date: '2026-09-18',
    },
  ];

  return (
    <section className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}

export default PostList;
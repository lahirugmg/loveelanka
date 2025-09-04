import posts from '@/data/posts';
import PostCard from './PostCard';

export default function BlogHighlights() {
  const recent = posts.slice(0, 3);
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">From The Blog</h2>
        <div className="grid grid-3" style={{marginTop:16}}>
          {recent.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}


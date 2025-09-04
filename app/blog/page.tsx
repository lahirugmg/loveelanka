import Header from '@/components/Header';
import Footer from '@/components/Footer';
import posts from '@/data/posts';
import PostCard from '@/components/PostCard';

export const metadata = { title: 'Blog • Lovee Lanka' };

export default function BlogPage() {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container">
          <h1 className="section-title">Travel & Lifestyle Guides</h1>
          <div className="grid grid-3" style={{marginTop:16}}>
            {posts.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}


import Header from '@/components/Header';
import Footer from '@/components/Footer';
import posts from '@/data/posts';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  return { title: post ? `${post.title} • Lovee Lanka` : 'Blog • Lovee Lanka' };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <>
      <Header />
      <article className="section">
        <div className="container" style={{maxWidth:820}}>
          <h1 style={{fontFamily:'var(--font-montserrat)',fontSize:34,margin:'0 0 12px'}}>{post.title}</h1>
          <div style={{position:'relative',width:'100%',aspectRatio:'4/2.2',borderRadius:12,overflow:'hidden',marginBottom:16}}>
            <Image src={post.image} alt={post.title} fill style={{objectFit:'cover'}} />
          </div>
          <p style={{whiteSpace:'pre-wrap'}}>{post.content}</p>
        </div>
      </article>
      <Footer />
    </>
  );
}


import Image from 'next/image';
import Link from 'next/link';
import type { Post } from '@/types';

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="card" style={{display:'block'}}>
      <div style={{position:'relative',width:'100%',aspectRatio:'4/3',background:'#f5efe6'}}>
        <Image src={post.image} alt={post.title} fill style={{objectFit:'cover'}} sizes="(min-width: 640px) 33vw, 100vw" />
      </div>
      <div className="card-body">
        <div style={{fontFamily:'var(--font-montserrat)',fontWeight:700, color:'var(--olive)'}}>{post.title}</div>
        <p className="muted" style={{marginTop:6}}>{post.excerpt}</p>
      </div>
    </Link>
  );
}


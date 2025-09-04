import Header from '@/components/Header';
import Footer from '@/components/Footer';
import products from '@/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = products.find((x) => x.slug === params.slug);
  return { title: p ? `${p.name} • Lovee Lanka` : 'Product • Lovee Lanka' };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();
  return (
    <>
      <Header />
      <section className="section">
        <div className="container" style={{display:'grid', gap:24}}>
          <div style={{position:'relative', width:'100%', maxWidth:720, aspectRatio:'4/3', borderRadius:12, overflow:'hidden'}}>
            <Image src={product.image} alt={product.name} fill style={{objectFit:'cover'}} />
          </div>
          <div style={{maxWidth:720}}>
            <h1 style={{fontFamily:'var(--font-montserrat)',fontSize:30,margin:'0 0 6px'}}>{product.name}</h1>
            <div className="muted" style={{marginBottom:12}}>${product.price}</div>
            <p>{product.description}</p>
            <div style={{display:'flex',gap:10, marginTop:12}}>
              <a className="btn btn-primary" href="/shop">Buy Now</a>
              <Link className="btn btn-secondary" href="/shop">Back to Shop</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}


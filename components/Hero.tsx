import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <h1>Handmade Crafts & Lifestyle Inspiration – From Sri Lanka to the World</h1>
        <p className="muted" style={{maxWidth:720, marginBottom:20}}>
          Discover authentic Sri Lankan handmade crafts, slow living guides, and travel stories.
          Thoughtfully curated for students, small shops, and modern minimalists.
        </p>
        <Link className="btn btn-secondary" href="/shop">Explore Collection</Link>
      </div>
    </section>
  );
}


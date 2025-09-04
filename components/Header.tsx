import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:70}}>
        <Link href="/" className="brand" style={{fontSize:20}}>Lovee Lanka</Link>
        <nav style={{display:'flex',gap:18,alignItems:'center'}}>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/shop" className="btn btn-primary" style={{marginLeft:6}}>Shop Now</Link>
        </nav>
      </div>
    </header>
  );
}


import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:12}}>
        <div className="muted">© 2025 Lovee Lanka – All Rights Reserved</div>
        <nav style={{display:'flex',gap:14,flexWrap:'wrap'}}>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </nav>
        <div style={{display:'flex',gap:12}}>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="YouTube">YouTube</a>
        </div>
      </div>
    </footer>
  );
}


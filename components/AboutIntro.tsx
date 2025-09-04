import Image from 'next/image';
import Link from 'next/link';

export default function AboutIntro() {
  return (
    <section className="section" style={{background:'var(--sand)'}}>
      <div className="container" style={{display:'grid', gap:20, alignItems:'center'}}>
        <div style={{display:'grid', gridTemplateColumns:'96px 1fr', gap:18, alignItems:'center'}}>
          <div style={{position:'relative', width:96, height:96, borderRadius:'50%', overflow:'hidden', border:'3px solid #e4daca'}}>
            <Image src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=256&auto=format&fit=crop" alt="Lahiru portrait" fill style={{objectFit:'cover'}} />
          </div>
          <div>
            <h3 className="section-title" style={{textAlign:'left', marginBottom:8}}>About</h3>
            <p className="muted" style={{marginTop:0}}>
              Hi, I’m Lahiru 👋 I share my love for Sri Lankan crafts, travel, and simple living.
              This shop brings handmade beauty and inspiring stories to your home.
            </p>
            <Link href="/about" className="btn btn-secondary" style={{marginTop:10}}>Read More About Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
}


import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'Contact • Lovee Lanka' };

export default function ContactPage() {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container" style={{maxWidth:720}}>
          <h1 className="section-title" style={{textAlign:'left'}}>Contact</h1>
          <p className="muted">Have a question or collaboration idea? Send a message.</p>
          <form style={{display:'grid', gap:12, marginTop:12}}>
            <input placeholder="Your name" required style={{padding:'10px 12px', border:'1px solid #e0d7c9', borderRadius:12}} />
            <input type="email" placeholder="Your email" required style={{padding:'10px 12px', border:'1px solid #e0d7c9', borderRadius:12}} />
            <textarea placeholder="Message" rows={6} required style={{padding:'10px 12px', border:'1px solid #e0d7c9', borderRadius:12}} />
            <button className="btn btn-primary" type="submit">Send</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}


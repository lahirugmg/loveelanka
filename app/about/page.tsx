import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'About • Lovee Lanka' };

export default function AboutPage() {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container" style={{maxWidth:820}}>
          <h1 className="section-title" style={{textAlign:'left'}}>Our Story</h1>
          <p className="muted">
            Lovee Lanka is a small project by Lahiru that celebrates Sri Lankan
            crafts, travel, and simple living. The shop supports independent
            makers while the blog shares practical, friendly guides for students
            and small shops.
          </p>
          <p>
            The look and feel lean on earthy colors — clay, olive, sand, and a
            hint of teal — designed to be warm, natural, and modern. We hope the
            pieces you find here bring calm and inspiration to your home.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}


import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: 'Privacy Policy • Lovee Lanka' };

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container" style={{maxWidth:820}}>
          <h1 className="section-title" style={{textAlign:'left'}}>Privacy Policy</h1>
          <p className="muted">We respect your privacy. This site uses basic analytics and may include affiliate links. We never sell your data.</p>
          <ul>
            <li>Newsletter emails are stored securely and used only for updates.</li>
            <li>You can unsubscribe at any time from any email footer.</li>
            <li>Affiliate links may earn a small commission at no extra cost to you.</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}


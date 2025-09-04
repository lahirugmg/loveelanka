import Header from '@/components/Header';
import Footer from '@/components/Footer';
import products from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata = { title: 'Shop • Lovee Lanka' };

export default function ShopPage() {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container">
          <h1 className="section-title">Shop Handmade Crafts</h1>
          <p className="muted" style={{textAlign:'center'}}>Handmade pieces with clay, olive, sand, and teal tones.</p>
          <div className="grid grid-2" style={{marginTop:16}}>
            {products.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}


import products from '@/data/products';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const featured = products.slice(0, 4);
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <div className="grid grid-2" style={{marginTop:16}}>
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}


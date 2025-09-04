import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card">
      <div style={{position:'relative',width:'100%',aspectRatio:'4/3',background:'#f5efe6'}}>
        <Image src={product.image} alt={product.name} fill style={{objectFit:'cover'}} sizes="(min-width: 640px) 25vw, 100vw" />
      </div>
      <div className="card-body">
        <div style={{fontFamily:'var(--font-montserrat)',fontWeight:600}}>{product.name}</div>
        <div className="muted" style={{margin:'6px 0 10px'}}>${product.price}</div>
        <div style={{display:'flex',gap:8}}>
          <Link className="btn btn-primary" href={`/shop`}>Buy Now</Link>
          <Link className="btn btn-secondary" href={`/products/${product.slug}`}>Details</Link>
        </div>
      </div>
    </div>
  );
}


export default function InstagramGrid() {
  const imgs = [
    'https://images.unsplash.com/photo-1549887534-1541e9323e94?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1549880181-56a44cf4a9a7?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1532465614-6cc8d45f6472?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1458421830557-952c2056e6b8?q=80&w=600&auto=format&fit=crop'
  ];
  return (
    <section className="section" style={{paddingTop:24}}>
      <div className="container">
        <h2 className="section-title">Instagram</h2>
      </div>
      <div className="grid grid-3" style={{gap:2}}>
        {imgs.map((src, i) => (
          <div key={i} style={{position:'relative',width:'100%',aspectRatio:'1/1',background:'#e9e3da'}}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="Instagram post" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} />
          </div>
        ))}
      </div>
      <div className="container" style={{textAlign:'center', marginTop:14}}>
        <a className="btn btn-secondary" href="#">Follow on Instagram</a>
      </div>
    </section>
  );
}


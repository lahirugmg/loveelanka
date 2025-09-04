export default function InstagramGrid() {
  const imgs = [
    'https://picsum.photos/600/600?random=6',
    'https://picsum.photos/600/600?random=7',
    'https://picsum.photos/600/600?random=8',
    'https://picsum.photos/600/600?random=9',
    'https://picsum.photos/600/600?random=10',
    'https://picsum.photos/600/600?random=11'
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


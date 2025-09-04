export default function Testimonials() {
  return (
    <section className="section" style={{background:'#f6f1e8'}}>
      <div className="container">
        <h2 className="section-title">What Customers Say</h2>
        <div className="grid grid-2" style={{marginTop:16}}>
          <blockquote className="card" style={{padding:16, margin:0}}>
            <p style={{marginTop:0}}>
              “Beautiful craftsmanship and fast shipping. The woven basket added
              a warm touch to my home!”
            </p>
            <div className="muted">— Nadeesha</div>
          </blockquote>
          <blockquote className="card" style={{padding:16, margin:0}}>
            <p style={{marginTop:0}}>
              “Loved the batik scarf! Soft, vibrant, and truly unique. Perfect gift.”
            </p>
            <div className="muted">— Amaya</div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}


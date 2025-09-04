"use client";
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      setStatus('loading');
      await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) });
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="section">
      <div className="container" style={{textAlign:'center'}}>
        <h2 className="section-title">Join the Newsletter</h2>
        <p className="muted">Get travel tips & exclusive craft discounts straight to your inbox.</p>
        <form onSubmit={onSubmit} style={{display:'flex', gap:10, justifyContent:'center', marginTop:14, flexWrap:'wrap'}}>
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{padding:'10px 12px',minWidth:260, border:'1px solid #e0d7c9', borderRadius:12, background:'#fff'}}
          />
          <button className="btn btn-primary" disabled={status==='loading'}>
            {status==='loading' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>
        {status==='success' && (<div style={{marginTop:10, color:'var(--olive)'}}>Thanks! Please check your inbox.</div>)}
        {status==='error' && (<div style={{marginTop:10, color:'crimson'}}>Something went wrong. Try again.</div>)}
      </div>
    </section>
  );
}


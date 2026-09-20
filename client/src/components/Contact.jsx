import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  const { setRef } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Backend is running on port 5000 typically
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'Web Development', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head reveal" ref={setRef}>
          <p className="section-tag">reach out</p>
          <h2>tell us what you<br/>want to build.</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-form-panel reveal" ref={setRef}>
            <form id="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">your name</label>
                <input type="text" id="name" name="name" placeholder="e.g. Abdul Rehman" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">email</label>
                <input type="email" id="email" name="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="service">what do you need</label>
                <div className="select-wrapper">
                  <select id="service" name="service" value={formData.service} onChange={handleChange}>
                    <option>Web Development</option>
                    <option>App Development</option>
                    <option>UI/UX Design</option>
                    <option>Software Development</option>
                    <option>Quality Assurance</option>
                    <option>Marketing & Outreach</option>
                    <option>Not sure yet, let's talk</option>
                  </select>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">describe your project</label>
                <textarea id="message" name="message" placeholder="Tell us about your idea, timeline, and any specific requirements..." value={formData.message} onChange={handleChange}></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={status === 'loading' || status === 'success'}
                style={status === 'success' ? { background: 'var(--brand)' } : {}}
              >
                {status === 'loading' ? 'sending...' : status === 'success' ? 'message sent ✓' : 'send message'}
              </button>
              
              {status === 'error' && <p className="form-hint" style={{color: 'red'}}>Something went wrong. Please try again.</p>}
              {status !== 'error' && <p className="form-hint">We reply within one working day. No sales pitch, no chasing.</p>}
            </form>
          </div>

          <div className="contact-info-panel reveal reveal-delay-2" ref={setRef}>
            <div className="info-table">
              <div className="info-row">
                <span className="info-label">email</span>
                <span className="info-value">
                  <a href="mailto:hello@aroxesolutions.com">aroxesolutions@gmail.com</a>
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">phone</span>
                <span className="info-value">
                  <a href="tel:+923394029967">+92 339 4029967 </a>
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">hours</span>
                <span className="info-value">
                  <span style={{ display: 'block' }}>Monday to Friday, 9:00 – 18:00 PKT</span>
                  <span style={{ display: 'block' }}>Support available 24/7 for active projects</span>
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">socials</span>
                <span className="info-value">
                  <a href="#" style={{ marginRight: '16px' }}>LinkedIn</a>
                  <a href="#" style={{ marginRight: '16px' }}>Instagram</a>
                  <a href="#">Twitter</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

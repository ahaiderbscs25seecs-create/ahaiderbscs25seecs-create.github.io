import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Services = () => {
  const { setRef } = useScrollReveal();

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-head reveal" ref={setRef}>
          <p className="section-tag">what we do</p>
          <h2>end-to-end digital<br/>services that <span style={{ color: 'rgba(255,255,255,0.55)' }}>deliver.</span></h2>
        </div>

        <div className="services-grid">
          <article className="service-card reveal reveal-delay-1" ref={setRef}>
            <span className="service-icon">
              <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </span>
            <h3>Web Development</h3>
            <p>Custom websites and web applications built with modern technologies — fast, responsive, and optimized for conversions.</p>
            <span className="card-arrow">→</span>
          </article>

          <article className="service-card reveal reveal-delay-2" ref={setRef}>
            <span className="service-icon">
              <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            </span>
            <h3>App Development</h3>
            <p>Native and cross-platform mobile applications for iOS and Android that your users will love to use every day.</p>
            <span className="card-arrow">→</span>
          </article>

          <article className="service-card reveal reveal-delay-3" ref={setRef}>
            <span className="service-icon">
              <svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
            </span>
            <h3>UI/UX Design</h3>
            <p>User-centered design systems and interfaces that feel intuitive, look stunning, and drive engagement at every touchpoint.</p>
            <span className="card-arrow">→</span>
          </article>

          <article className="service-card reveal reveal-delay-4" ref={setRef}>
            <span className="service-icon">
              <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>
            </span>
            <h3>Software Development</h3>
            <p>Custom enterprise solutions and SaaS platforms engineered for scale, security, and long-term maintainability.</p>
            <span className="card-arrow">→</span>
          </article>

          <article className="service-card reveal reveal-delay-5" ref={setRef}>
            <span className="service-icon">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            </span>
            <h3>Quality Assurance</h3>
            <p>Rigorous manual and automated testing that catches every bug before your users do. Ship with absolute confidence.</p>
            <span className="card-arrow">→</span>
          </article>

          <article className="service-card reveal reveal-delay-6" ref={setRef}>
            <span className="service-icon">
              <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </span>
            <h3>Marketing & Outreach</h3>
            <p>Strategic digital marketing, SEO, social media campaigns, and outreach programs that put your brand in front of the right audience.</p>
            <span className="card-arrow">→</span>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;

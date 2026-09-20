import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const WhyUs = () => {
  const { setRef } = useScrollReveal();

  return (
    <section className="section" id="why-us">
      <div className="container">
        <div className="why-us-grid">
          <div className="why-us-text">
            <div className="section-head">
              <p className="section-tag">why us</p>
              <h2>we don't just deliver. we work as <span className="text-brand">partners.</span></h2>
            </div>
            <p className="text-body">
              We stay close to your project after launch — refining, optimizing, and scaling it so it performs flawlessly when it matters most and earns real loyalty from the people using it.
            </p>
            <div className="why-cta">
              <a href="#contact" className="btn btn-primary">talk to our team</a>
            </div>
          </div>

          <div className="features-list">
            <div className="feature-card reveal" ref={setRef}>
              <span className="feature-check">
                <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
              </span>
              <div>
                <h3>Reliable at Scale</h3>
                <p>We stress-test against your busiest scenarios, so launch days and campaigns run without a hitch.</p>
              </div>
            </div>

            <div className="feature-card reveal reveal-delay-1" ref={setRef}>
              <span className="feature-check">
                <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
              </span>
              <div>
                <h3>Quality-First Approach</h3>
                <p>Every change runs through automated checks first. You review polished work, never broken drafts.</p>
              </div>
            </div>

            <div className="feature-card reveal reveal-delay-2" ref={setRef}>
              <span className="feature-check">
                <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
              </span>
              <div>
                <h3>Built Around Your Users</h3>
                <p>We watch real people interact with your product and fix friction points before they reach your inbox.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

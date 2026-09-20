import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Showcase = () => {
  const { setRef } = useScrollReveal();

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="showcase-banner reveal" ref={setRef}>
          <p className="section-tag showcase-tag">what we bring</p>
          <h2 className="showcase-title">
            we bring the expertise. <span className="dim">you bring the vision.</span>
          </h2>
          <p className="showcase-desc">
            One team, built to deliver. We keep the engines running — design, code, testing, and marketing — so your biggest launch feels as smooth as a quiet Tuesday.
          </p>
          <div className="tech-grid">
            <span className="tech-pill">react</span>
            <span className="tech-pill">node.js</span>
            <span className="tech-pill">flutter</span>
            <span className="tech-pill">python</span>
            <span className="tech-pill">aws</span>
            <span className="tech-pill">figma</span>
            <span className="tech-pill">next.js</span>
            <span className="tech-pill">firebase</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import useCounterAnimation from '../hooks/useCounterAnimation';

const Experience = () => {
  const { setRef: setRevealRef } = useScrollReveal();
  
  const { count: count1, ref: ref1 } = useCounterAnimation(25, 2000, '+');
  const { count: count2, ref: ref2 } = useCounterAnimation(15, 2000, '+');
  const { count: count3, ref: ref3 } = useCounterAnimation(99.9, 2000, '%');
  const { count: count4, ref: ref4 } = useCounterAnimation(24, 2000, '/7');

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head reveal" ref={setRevealRef}>
          <p className="section-tag">our experience</p>
          <h2>numbers that speak<br/>for themselves.</h2>
        </div>

        <div className="stats-grid reveal" ref={setRevealRef}>
          <div className="stat-card">
            <b className="stat-number" ref={ref1}>{count1}</b>
            <span className="stat-label">projects delivered</span>
          </div>
          <div className="stat-card">
            <b className="stat-number" ref={ref2}>{count2}</b>
            <span className="stat-label">happy clients</span>
          </div>
          <div className="stat-card">
            <b className="stat-number" ref={ref3}>{count3}</b>
            <span className="stat-label">uptime maintained</span>
          </div>
          <div className="stat-card">
            <b className="stat-number" ref={ref4}>{count4}</b>
            <span className="stat-label">support available</span>
          </div>
        </div>

        <div className="clients-grid reveal reveal-delay-2" ref={setRevealRef}>
          <div className="client-badge"><i></i>Tech Innovations Co.</div>
          <div className="client-badge"><i></i>Global Retail Group</div>
          <div className="client-badge"><i></i>HealthBridge Solutions</div>
          <div className="client-badge"><i></i>Urban Developers LLC</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Process = () => {
  const { setRef } = useScrollReveal();

  return (
    <section className="process section" id="process">
      <div className="container">
        <div className="section-head reveal" ref={setRef}>
          <p className="section-tag">our process</p>
          <h2>four steps, idea<br/>to launch day.</h2>
        </div>

        <div className="process-grid">
          <div className="process-step reveal reveal-delay-1" ref={setRef}>
            <span className="step-number">01</span>
            <h3>Discovery Call</h3>
            <p>A relaxed conversation about your goals, your users, and the problem you want solved. Bring the idea — we bring the questions.</p>
          </div>

          <div className="process-step reveal reveal-delay-2" ref={setRef}>
            <span className="step-number">02</span>
            <h3>Strategy & Plan</h3>
            <p>You receive scope, timeline, and a clear price on one page — written so anyone on your team can understand it.</p>
          </div>

          <div className="process-step reveal reveal-delay-3" ref={setRef}>
            <span className="step-number">03</span>
            <h3>Build & Iterate</h3>
            <p>Every week you see working progress you can click through. You can steer direction at any point along the way.</p>
          </div>

          <div className="process-step reveal reveal-delay-4" ref={setRef}>
            <span className="step-number">04</span>
            <h3>Launch & Support</h3>
            <p>We launch it, monitor real traffic, and stay on afterwards to keep it fast, secure, and continuously improving.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

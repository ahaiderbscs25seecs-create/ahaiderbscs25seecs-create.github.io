import React from 'react';

const Hero = () => {
  return (
    <section className="hero section" id="hero">
      <div className="hero-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-tag">digital agency · your growth partner</p>
          <h1 className="hero-title">
            transforming ideas<br/>into digital <span className="text-brand">reality.</span>
          </h1>
          <p className="text-body">
            Tell us what you envision. We handle every technical detail — designing, building, testing, launching, and growing your digital presence so you can focus on what matters most.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">start a project</a>
            <a href="#services" className="btn btn-secondary">our services</a>
          </div>
        </div>

        <div className="hero-visual">
          <svg className="hero-illustration" viewBox="0 0 520 400" role="img" aria-label="Abstract digital workspace illustration">
            <rect x="100" y="40" width="320" height="210" rx="16" fill="#fff" stroke="#1A1A1A" strokeWidth="2.2"/>
            <rect x="114" y="54" width="292" height="168" rx="8" fill="#FFFDD0"/>

            <rect x="114" y="54" width="292" height="168" rx="8" fill="#967BB6" opacity="0.92">
              <animate attributeName="opacity" values="0;0.92" dur="1.2s" fill="freeze"/>
            </rect>

            <g opacity="0">
              <animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.8s" fill="freeze"/>
              <circle cx="134" cy="74" r="4" fill="#fff"/>
              <circle cx="150" cy="74" r="4" fill="#fff"/>
              <circle cx="166" cy="74" r="4" fill="#fff"/>
              <rect x="134" y="94" width="140" height="12" rx="6" fill="#fff"/>
              <rect x="134" y="116" width="100" height="8" rx="4" fill="#fff" opacity="0.6"/>
              <rect x="134" y="132" width="120" height="8" rx="4" fill="#fff" opacity="0.6"/>
              
              <rect x="134" y="162" width="28" height="40" rx="4" fill="#fff" opacity="0.85">
                <animate attributeName="height" values="0;40" dur="0.6s" begin="1.2s" fill="freeze"/>
                <animate attributeName="y" values="202;162" dur="0.6s" begin="1.2s" fill="freeze"/>
              </rect>
              <rect x="170" y="150" width="28" height="52" rx="4" fill="#fff" opacity="0.85">
                <animate attributeName="height" values="0;52" dur="0.6s" begin="1.35s" fill="freeze"/>
                <animate attributeName="y" values="202;150" dur="0.6s" begin="1.35s" fill="freeze"/>
              </rect>
              <rect x="206" y="170" width="28" height="32" rx="4" fill="#fff" opacity="0.85">
                <animate attributeName="height" values="0;32" dur="0.6s" begin="1.5s" fill="freeze"/>
                <animate attributeName="y" values="202;170" dur="0.6s" begin="1.5s" fill="freeze"/>
              </rect>
              <rect x="242" y="144" width="28" height="58" rx="4" fill="#fff" opacity="0.85">
                <animate attributeName="height" values="0;58" dur="0.6s" begin="1.65s" fill="freeze"/>
                <animate attributeName="y" values="202;144" dur="0.6s" begin="1.65s" fill="freeze"/>
              </rect>

              <polyline points="310,190 340,170 370,178 390,148" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
                <animate attributeName="stroke-dashoffset" values="200;0" dur="0.8s" begin="1.8s" fill="freeze"/>
                <animate attributeName="stroke-dasharray" values="200;200" dur="0.01s" begin="0s" fill="freeze"/>
              </polyline>
              <circle cx="390" cy="148" r="5" fill="#967BB6" stroke="#fff" strokeWidth="2">
                <animate attributeName="opacity" values="0;1" dur="0.3s" begin="2.4s" fill="freeze"/>
              </circle>
            </g>

            <circle cx="260" cy="234" r="4.5" fill="#1A1A1A"/>
            <path d="M240 250 h40 v30 h-40 z" fill="#fff" stroke="#1A1A1A" strokeWidth="2.2"/>
            <rect x="210" y="278" width="100" height="12" rx="6" fill="#fff" stroke="#1A1A1A" strokeWidth="2.2"/>

            <g>
              <rect x="30" y="120" width="56" height="56" rx="12" fill="#967BB6" opacity="0.15">
                <animate attributeName="y" values="120;110;120" dur="4s" repeatCount="indefinite"/>
              </rect>
              <rect x="434" y="80" width="48" height="48" rx="24" fill="#FFFDD0" stroke="#967BB6" strokeWidth="2" opacity="0.6">
                <animate attributeName="y" values="80;92;80" dur="5s" repeatCount="indefinite"/>
              </rect>
              <rect x="450" y="220" width="40" height="40" rx="8" fill="#967BB6" opacity="0.12" transform="rotate(15 470 240)">
                <animate attributeName="opacity" values="0.12;0.22;0.12" dur="3s" repeatCount="indefinite"/>
              </rect>
              <text x="42" y="155" fontFamily="monospace" fontSize="22" fill="#967BB6" opacity="0.6">&lt;/&gt;</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

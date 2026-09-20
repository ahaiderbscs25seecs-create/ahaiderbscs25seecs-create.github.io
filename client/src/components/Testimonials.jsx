import React, { useState, useEffect, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Testimonials = () => {
  const { setRef } = useScrollReveal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef(null);
  
  const testimonials = [
    {
      quote: `"Our e-commerce platform used to crash every sale weekend. Since Aroxe rebuilt it, we haven't had a single incident in over a year."`,
      initials: 'SK',
      name: 'Sara Khan',
      role: 'Operations Director, StyleHub Retail'
    },
    {
      quote: `"I'm not a tech person, and I never once felt lost. They explained every decision clearly and delivered ahead of schedule."`,
      initials: 'AH',
      name: 'Ahmed Hassan',
      role: 'Founder, GreenLeaf Foods'
    },
    {
      quote: `"They redesigned our entire booking system that three agencies had given up on — and delivered it two weeks early."`,
      initials: 'MR',
      name: 'Maria Rizvi',
      role: 'Head of Digital, MedCare Clinics'
    },
    {
      quote: `"Their marketing outreach doubled our leads in three months. The weekly updates mean I always know exactly where the budget is going."`,
      initials: 'FN',
      name: 'Fahad Nawaz',
      role: 'Managing Partner, Skyline Realty'
    }
  ];

  const totalSlides = testimonials.length;

  const goToSlide = (index) => {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="testimonials section" id="reviews">
      <div className="container">
        <div className="section-head reveal" ref={setRef}>
          <p className="section-tag">client reviews</p>
          <h2>what our clients say<br/>months later.</h2>
        </div>

        <div className="testimonial-slider reveal" ref={setRef}>
          <div className="testimonial-track-wrapper">
            <div 
              className="testimonial-track" 
              ref={trackRef}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((test, i) => (
                <article key={i} className="testimonial-slide" aria-hidden={i !== currentSlide}>
                  <p className="testimonial-quote">{test.quote}</p>
                  <div className="testimonial-author">
                    <span className="author-avatar">{test.initials}</span>
                    <div>
                      <b className="author-name">{test.name}</b>
                      <span className="author-role">{test.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="slider-controls">
            <div className="slider-dots">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  className={`dot ${i === currentSlide ? 'active' : ''}`} 
                  onClick={() => goToSlide(i)}
                  type="button" 
                  aria-label={`Review ${i + 1}`}
                ></button>
              ))}
            </div>
            <button className="slider-btn" onClick={() => goToSlide(currentSlide - 1)} type="button" aria-label="Previous review">
              <svg viewBox="0 0 24 24"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            </button>
            <button className="slider-btn" onClick={() => goToSlide(currentSlide + 1)} type="button" aria-label="Next review">
              <svg viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

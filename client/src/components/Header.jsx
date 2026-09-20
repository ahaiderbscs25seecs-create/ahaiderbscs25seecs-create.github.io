import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    closeMenu();
    const target = document.getElementById(id);
    if (target) {
      const headerH = 72; // var(--header-h)
      const top = target.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="top">
        <div className="header-inner">
          <a href="#top" onClick={(e) => scrollToSection(e, 'top')} className="logo">
            Aroxe<span className="logo-accent">.</span>
          </a>

          <nav className="nav-links">
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="nav-link">services</a>
            <a href="#why-us" onClick={(e) => scrollToSection(e, 'why-us')} className="nav-link">why us</a>
            <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="nav-link">process</a>
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="nav-link">experience</a>
            <a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className="nav-link">reviews</a>
          </nav>

          <span className="header-spacer"></span>

          <button className="menu-btn" onClick={toggleMenu} aria-expanded={menuOpen}>
            menu
          </button>

          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn btn-primary desktop-only">contact</a>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`} onClick={(e) => { if(e.target.classList.contains('mobile-nav')) closeMenu() }}>
        <div className="mobile-nav-inner">
          <div className="mobile-nav-header">
            <span className="logo">Aroxe<span className="logo-accent">.</span></span>
            <button className="mobile-close-btn" onClick={closeMenu}>✕</button>
          </div>
          <nav className="mobile-nav-links">
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="mobile-nav-link">Services</a>
            <a href="#why-us" onClick={(e) => scrollToSection(e, 'why-us')} className="mobile-nav-link">Why Us</a>
            <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="mobile-nav-link">Process</a>
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="mobile-nav-link">Experience</a>
            <a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className="mobile-nav-link">Reviews</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="mobile-nav-link">Contact</a>
          </nav>
          <div className="mobile-nav-cta">
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="btn btn-primary mobile-nav-link" style={{ width: '100%', justifyContent: 'center' }}>get started</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

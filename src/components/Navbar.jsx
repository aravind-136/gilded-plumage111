import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Collection', href: '#collection' },
    { label: 'Craft & Technology', href: '#technology' },
    { label: 'Inspiration', href: '#materials' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`site-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand Logo & Wordmark */}
        <a href="#home" className="nav-brand" aria-label="Gilded Plumage Home">
          <div className="brand-emblem-wrap">
            <img
              src="/images/gilded-plumage-logo.png"
              alt="Gilded Plumage Emblem"
              className="brand-emblem-img"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <div className="brand-text-wrap">
            <span className="brand-title">GILDED PLUMAGE</span>
            <span className="brand-tagline">Where Nature Meets Innovation</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Academic Project Badge on Right */}
        <div className="nav-badge-wrap">
          <a href="#about" className="academic-badge-pill">
            <span className="badge-dot" />
            <span>Fashion &amp; Technology</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="mobile-toggle"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          <p className="mobile-nav-label">EDITORIAL NAVIGATION</p>
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mobile-nav-footer">
            <p>GILDED PLUMAGE • 2026</p>
            <p className="mobile-sub">Academic Subject: Fashion &amp; Technology</p>
          </div>
        </div>
      </div>
    </header>
  );
}

import React from 'react';

export default function Hero() {
  return (
    <section className="editorial-hero" id="home">
      <div className="hero-grid-container">
        
        {/* Left / Main Editorial Typography Column */}
        <div className="hero-content-col">
          <div className="editorial-meta-tag">
            <span className="gold-accent-dash" />
            <span className="meta-text">Academic Couture Portfolio • Fashion &amp; Technology</span>
          </div>

          <h1 className="hero-main-title">
            WHERE NATURE
            <br />
            <span className="serif-italic-gold">MEETS INNOVATION</span>
          </h1>

          <p className="hero-lead-description">
            An exploration of couture, craftsmanship, colour, and technology inspired by the extraordinary beauty of peacock plumage.
          </p>

          <div className="hero-actions-group">
            <a href="#collection" className="btn-primary-gold">
              Explore the Collection
            </a>
            <a href="#about" className="btn-secondary-editorial">
              <span>Discover Our Story</span>
              <span className="arrow-icon" aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {/* Editorial Key Statistics / Highlights */}
          <div className="hero-spec-strip">
            <div className="spec-item">
              <span className="spec-number">08</span>
              <span className="spec-label">Signature Ensembles</span>
            </div>
            <div className="spec-divider" />
            <div className="spec-item">
              <span className="spec-number">06</span>
              <span className="spec-label">Chromatic Jewel Tones</span>
            </div>
            <div className="spec-divider" />
            <div className="spec-item">
              <span className="spec-number">04</span>
              <span className="spec-label">Technology Pillars</span>
            </div>
          </div>
        </div>

        {/* Right Editorial Photography Column */}
        <div className="hero-visual-col">
          <div className="hero-image-frame">
            <img
              src="/images/hero-peacock.jpg"
              alt="Extreme macro photograph of iridescent peacock plumage and feather barbs"
              className="hero-macro-image"
              loading="eager"
            />
            <div className="image-editorial-caption">
              <span className="caption-number">Plate 01</span>
              <span className="caption-title">Structural Iridescence &amp; Natural Biomimicry</span>
            </div>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <a href="#philosophy" className="hero-scroll-indicator" aria-label="Scroll to Philosophy">
        <span className="scroll-text">Explore Philosophy</span>
        <span className="scroll-arrow" aria-hidden="true">&darr;</span>
      </a>
    </section>
  );
}

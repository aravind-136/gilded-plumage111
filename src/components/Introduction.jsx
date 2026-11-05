import React from 'react';

export default function Introduction() {
  return (
    <section className="editorial-section intro-section" id="philosophy">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <p className="editorial-label">THE PHILOSOPHY</p>
          <h2 className="section-title">Beauty in Every Detail.</h2>
          <div className="gold-accent-line" />
        </div>

        {/* Two-Column Editorial Narrative */}
        <div className="intro-grid">
          
          <div className="intro-text-column">
            <p className="intro-lead-paragraph">
              Gilded Plumage is inspired by the intricate beauty of nature and the expressive possibilities of fashion. Drawing inspiration from the iridescent colours and graceful patterns of peacock feathers, the concept explores the relationship between craftsmanship, material, and contemporary design.
            </p>

            <div className="intro-sub-block">
              <h3 className="intro-sub-heading">Symbolism &amp; Cultural Heritage</h3>
              <p className="intro-body-paragraph">
                The peacock, India’s national bird, has captivated human creativity for centuries. Revered spiritually as an emblem of courage, wisdom, and purity, its distinctive geometry and iridescent blue, green, and violet plumage provide an inexhaustible visual lexicon for high-end fashion design.
              </p>
            </div>

            <div className="intro-sub-block">
              <h3 className="intro-sub-heading">Couture Meets Modernity</h3>
              <p className="intro-body-paragraph">
                Where historical couture relied entirely on time-consuming hand-stitching, modern fashion design merges traditional zardozi and bullion needlework with precision digital simulation, laser-cutting, and bio-inspired textile development.
              </p>
            </div>
          </div>

          <div className="intro-visual-column">
            <div className="intro-image-wrapper">
              <img
                src="/images/craftsmanship.jpg"
                alt="Intricate gold bullion zardozi embroidery and textile craftsmanship"
                className="intro-feature-img"
                loading="lazy"
              />
              <div className="intro-image-card">
                <span className="card-kicker">Material Craftsmanship</span>
                <p className="card-quote">
                  &ldquo;Where nature meets luxury, tradition meets contemporary fashion, and artistry becomes personal expression.&rdquo;
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

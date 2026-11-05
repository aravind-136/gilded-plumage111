import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-container">
        
        {/* Top Footer Row */}
        <div className="footer-top-row">
          
          <div className="footer-brand-col">
            <div className="footer-logo-wrap">
              <div className="footer-emblem-disc">
                <img
                  src="/images/gilded-plumage-logo.png"
                  alt="Gilded Plumage Emblem"
                  className="footer-emblem-img"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <span className="footer-brand-title">GILDED PLUMAGE</span>
            </div>
            <p className="footer-brand-desc">
              A luxury fashion concept inspired by the extraordinary colours, textures, patterns, and natural elegance of peacock plumage, bridging traditional couture with modern fashion technology.
            </p>
            <p className="footer-tagline">&ldquo;Where Nature Meets Innovation.&rdquo;</p>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">Navigation</span>
            <ul className="footer-nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#philosophy">The Philosophy</a></li>
              <li><a href="#collection">Signature Collection</a></li>
              <li><a href="#technology">Fashion &amp; Technology</a></li>
              <li><a href="#materials">Colour &amp; Materials</a></li>
              <li><a href="#process">Design Methodology</a></li>
              <li><a href="#about">About Project</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-meta-col">
            <span className="footer-col-title">Academic Provenance</span>
            <p className="footer-academic-text">
              Developed for the academic course <strong>Fashion &amp; Technology</strong>.
            </p>
            <p className="footer-academic-text">
              An exploration of biomimicry, structural coloration, 3D simulation, and luxury couture craftsmanship.
            </p>
            <button
              type="button"
              className="footer-back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span>Return to Top</span>
              <span className="arrow-up" aria-hidden="true">&uarr;</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="footer-bottom-strip">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} GILDED PLUMAGE. Academic Fashion &amp; Technology Design Concept.
          </p>
          <p className="credits-text">
            Curated by G. Anurag, M Koushik Rangarajan, G. D. S. Aravind, K. Akhil &amp; G. Rishikesh.
          </p>
        </div>

      </div>
    </footer>
  );
}

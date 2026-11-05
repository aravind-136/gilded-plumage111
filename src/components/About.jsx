import React from 'react';

export default function About() {
  const teamMembers = [
    { reg: '23MIS7063', name: 'G. Anurag' },
    { reg: '23MIS7218', name: 'M Koushik Rangarajan' },
    { reg: '23MIS7233', name: 'G. D. S. Aravind' },
    { reg: '23MIS7246', name: 'K. Akhil' },
    { reg: '23MIC7242', name: 'G. Rishikesh' },
  ];

  return (
    <section className="editorial-section about-section" id="about">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <p className="editorial-label">ACADEMIC GENESIS</p>
          <h2 className="section-title">AN EXPRESSION OF ART AND INNOVATION</h2>
          <div className="gold-accent-line" />
        </div>

        {/* Narrative & Academic Provenance Grid */}
        <div className="about-editorial-grid">
          
          {/* Left Narrative Column */}
          <div className="about-narrative-col">
            <h3 className="about-subheading">Bridging Couture Craft and Scientific Rigor</h3>
            <p className="about-body-text">
              Gilded Plumage was conceived as an academic exploration for the subject <em>Fashion and Technology</em>. Rather than viewing fashion solely as decorative ornamentation or technology merely as automated mass production, our concept investigates how the two disciplines can enrich one another.
            </p>
            <p className="about-body-text">
              The Indian peacock provided the ultimate case study in biomimicry. Its feathers generate breathtaking iridescence through photonic crystal structures that reflect wavelengths of light without chemical pigment. By deconstructing this phenomenon, the project explores how future fashion can embrace non-polluting structural color, precision laser crafting, and zero-waste 3D digital simulation while honoring traditional craftsmanship.
            </p>
            <p className="about-body-text">
              The resulting eight signature garments demonstrate that high-end luxury fashion can remain deeply rooted in cultural heritage and natural beauty while stepping boldly into the digital era.
            </p>
          </div>

          {/* Right Provenance Card Column */}
          <div className="about-provenance-col">
            <div className="provenance-card">
              <div className="provenance-header">
                <span className="provenance-emblem">&#10022;</span>
                <span className="provenance-tag">Academic Subject Context</span>
              </div>
              <h4 className="provenance-title">Fashion &amp; Technology</h4>
              <p className="provenance-meta">Design Concept &amp; Digital Portfolio Presentation</p>

              <div className="provenance-divider" />

              <h5 className="members-heading">Project Research Team</h5>
              <ul className="members-list">
                {teamMembers.map((member) => (
                  <li key={member.reg} className="member-row">
                    <span className="member-reg">{member.reg}</span>
                    <span className="member-dash">—</span>
                    <span className="member-name">{member.name}</span>
                  </li>
                ))}
              </ul>

              <div className="provenance-footer-note">
                <span className="dot-mini" />
                <span>Submitted in fulfillment of academic coursework</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { TECH_TOPICS } from '../data/collectionData';

export default function Technology() {
  const [activeTopic, setActiveTopic] = useState(TECH_TOPICS[0].id);

  const selectedData = TECH_TOPICS.find((t) => t.id === activeTopic) || TECH_TOPICS[0];

  return (
    <section className="editorial-section tech-section dark-luxury-bg" id="technology">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-centered dark-theme">
          <p className="editorial-label gold-label">ACADEMIC SUBJECT: FASHION &amp; TECHNOLOGY</p>
          <h2 className="section-title white-title">THE FUTURE OF FASHION</h2>
          <p className="section-subtitle light-subtitle">
            Where craftsmanship meets innovation.
          </p>
          <div className="gold-accent-line" />
        </div>

        {/* Section Educational Overview */}
        <div className="tech-overview-box">
          <p className="tech-lead-paragraph">
            In modern fashion education, the synergy between traditional atelier handcraft and contemporary technology redefines what haute couture can achieve. Rather than replacing human artistry, advanced computational tools, biomimetic materials, and sustainable engineering provide fashion designers with unprecedented precision, ecological responsibility, and expressive freedom.
          </p>
        </div>

        {/* Two-Column Interactive Editorial Layout */}
        <div className="tech-interactive-grid">
          
          {/* Left Column: Topic Navigation Cards */}
          <div className="tech-tabs-list" role="tablist" aria-label="Technology Pillars">
            {TECH_TOPICS.map((topic) => {
              const isActive = topic.id === activeTopic;
              return (
                <button
                  key={topic.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`tech-tab-card ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTopic(topic.id)}
                >
                  <div className="tab-card-header">
                    <span className="tab-number">{topic.number}</span>
                    <span className="tab-subtitle-tag">{topic.subtitle}</span>
                  </div>
                  <h3 className="tab-title">{topic.title}</h3>
                  <p className="tab-summary">{topic.summary}</p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Educational Focus Panel */}
          <div className="tech-display-panel">
            <div className="panel-badge-row">
              <span className="panel-pillar-num">Pillar {selectedData.number}</span>
              <span className="panel-dot">•</span>
              <span className="panel-cat-text">Curricular Analysis</span>
            </div>

            <h3 className="panel-heading">{selectedData.title}</h3>
            <p className="panel-subheading">{selectedData.subtitle}</p>

            <div className="panel-gold-divider" />

            <div className="panel-content-body">
              <p className="panel-detail-text">{selectedData.detail}</p>
            </div>

            {/* Conceptual Framework Callout */}
            <div className="panel-academic-card">
              <h4 className="card-mini-title">Key Academic Takeaway</h4>
              <p className="card-mini-desc">
                {selectedData.id === 'smart-textiles' &&
                  'Biomimicry enables non-polluting optical coloration inspired by peacock nanostructures, eliminating heavy dye runoff while providing responsive comfort.'}
                {selectedData.id === 'digital-fashion' &&
                  '3D digital simulation transforms iterative prototyping into a sustainable, zero-waste process that respects atelier fabric resources.'}
                {selectedData.id === 'sustainable-innovation' &&
                  'Algorithmic pattern cutting and digital twins demonstrate how technology elevates luxury into an environmentally conscious discipline.'}
                {selectedData.id === 'craftsmanship-precision' &&
                  'Precision laser cutting and digital embroidery execute intricate foundations that master artisans then embellish by hand with traditional bullion stitches.'}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

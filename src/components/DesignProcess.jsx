import React from 'react';
import { PROCESS_STEPS } from '../data/collectionData';

export default function DesignProcess() {
  return (
    <section className="editorial-section process-section" id="process">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <p className="editorial-label">THE ATELIER METHODOLOGY</p>
          <h2 className="section-title">FROM INSPIRATION TO DESIGN</h2>
          <p className="section-subtitle">
            The four-stage creative and technical journey of Gilded Plumage.
          </p>
          <div className="gold-accent-line" />
        </div>

        {/* Process Flow: Horizontal on Desktop, Vertical on Mobile */}
        <div className="process-flow-track">
          {PROCESS_STEPS.map((item, index) => (
            <div key={item.step} className="process-step-node">
              <div className="step-indicator-row">
                <span className="step-number">{item.step}</span>
                {index < PROCESS_STEPS.length - 1 && <span className="step-connector-line" />}
              </div>
              <div className="step-card-content">
                <span className="step-phase-tag">{item.tagline}</span>
                <h3 className="step-phase-title">{item.phase}</h3>
                <p className="step-phase-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

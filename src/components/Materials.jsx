import React, { useState } from 'react';
import { COLOR_PALETTE, FABRICS } from '../data/collectionData';

export default function Materials() {
  const [selectedColor, setSelectedColor] = useState(COLOR_PALETTE[0]);

  return (
    <section className="editorial-section materials-section" id="materials">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <p className="editorial-label">CHROMATIC &amp; TEXTILE RESEARCH</p>
          <h2 className="section-title">INSPIRED BY NATURE</h2>
          <p className="section-subtitle">
            A chromatic and tactile exploration of the Indian peacock’s extraordinary plumage.
          </p>
          <div className="gold-accent-line" />
        </div>

        {/* Part 1: Interactive Color Palette */}
        <div className="materials-subsection">
          <div className="subsection-title-row">
            <h3 className="subsection-heading">The Peacock Jewel Palette</h3>
            <span className="subsection-tag">6 Curated Hues</span>
          </div>

          <div className="color-swatches-grid">
            {COLOR_PALETTE.map((c) => {
              const isSelected = selectedColor.name === c.name;
              return (
                <button
                  key={c.name}
                  type="button"
                  className={`swatch-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedColor(c)}
                >
                  <div
                    className="swatch-color-box"
                    style={{ backgroundColor: c.hex }}
                  >
                    <span className="swatch-hex-pill">{c.hex}</span>
                  </div>
                  <div className="swatch-meta">
                    <h4 className="swatch-name">{c.name}</h4>
                    <span className="swatch-role">{c.role}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Color Details Focus Box */}
          <div className="color-focus-display">
            <div className="focus-accent-block" style={{ backgroundColor: selectedColor.hex }} />
            <div className="focus-info-block">
              <span className="focus-color-label">{selectedColor.role}</span>
              <h4 className="focus-color-title">{selectedColor.name} ({selectedColor.hex})</h4>
              <p className="focus-color-desc">{selectedColor.inspiration}</p>
            </div>
          </div>
        </div>

        {/* Part 2: Fabric & Material Exploration */}
        <div className="materials-subsection fabric-subsection">
          <div className="subsection-title-row">
            <h3 className="subsection-heading">Textile &amp; Material Direction</h3>
            <span className="subsection-tag">Tactile Foundations</span>
          </div>

          <div className="fabrics-editorial-grid">
            {FABRICS.map((fabric, idx) => (
              <div key={fabric.name} className="fabric-card">
                <span className="fabric-index">0{idx + 1}</span>
                <h4 className="fabric-name">{fabric.name}</h4>
                <p className="fabric-property">{fabric.property}</p>
                <div className="fabric-divider" />
                <p className="fabric-description">{fabric.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

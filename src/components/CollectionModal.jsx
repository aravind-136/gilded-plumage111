import React, { useEffect } from 'react';

export default function CollectionModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close lookbook modal"
        >
          &times;
        </button>

        <div className="modal-layout">
          {/* Modal Left: High-Res Image View */}
          <div className="modal-image-col">
            <img
              src={item.image}
              alt={item.name + ' - ' + item.concept}
              className="modal-img"
            />
            <div className="modal-image-tag">
              <span>{item.categoryLabel}</span>
              <span className="dot-sep">•</span>
              <span>Look {item.id}</span>
            </div>
          </div>

          {/* Modal Right: Detailed Editorial & Technical Notes */}
          <div className="modal-details-col">
            <div className="modal-header">
              <span className="modal-kicker">LOOK {item.id} — {item.categoryLabel.toUpperCase()}</span>
              <h2 className="modal-title">{item.name}</h2>
              <p className="modal-concept-subtitle">{item.concept}</p>
            </div>

            <div className="modal-gold-line" />

            <div className="modal-specs-list">
              <div className="spec-row">
                <span className="spec-heading">Silhouette Architecture</span>
                <p className="spec-content">{item.silhouette}</p>
              </div>

              <div className="spec-row">
                <span className="spec-heading">Textile &amp; Fabric</span>
                <p className="spec-content">{item.fabric}</p>
              </div>

              <div className="spec-row">
                <span className="spec-heading">Colour Story</span>
                <p className="spec-content">{item.colorStory}</p>
              </div>

              <div className="spec-row">
                <span className="spec-heading">Ornithological Inspiration</span>
                <p className="spec-content">{item.inspiration}</p>
              </div>

              <div className="spec-row">
                <span className="spec-heading">Artisanal Craftsmanship &amp; Detailing</span>
                <p className="spec-content">{item.craftsmanship}</p>
              </div>

              <div className="spec-row">
                <span className="spec-heading">Curricular Academic Provenance</span>
                <p className="spec-content academic-callout">{item.academicNote}</p>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="modal-back-btn" onClick={onClose}>
                Return to Lookbook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

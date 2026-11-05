import React, { useState } from 'react';
import { COLLECTION_ITEMS } from '../data/collectionData';
import CollectionModal from './CollectionModal';

export default function Collection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeFilter === 'all'
    ? COLLECTION_ITEMS
    : COLLECTION_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className="editorial-section collection-section" id="collection">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <p className="editorial-label">THE SIGNATURE COLLECTION</p>
          <h2 className="section-title">Eight Expressions of Elegance</h2>
          <p className="section-subtitle">
            Eight expressions of elegance, inspired by colour, texture, and the art of couture.
          </p>
          <div className="gold-accent-line" />
        </div>

        {/* Category Filter Pills */}
        <div className="collection-filter-bar" role="tablist" aria-label="Collection Categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'all'}
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Silhouettes (8)
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'women'}
            className={`filter-btn ${activeFilter === 'women' ? 'active' : ''}`}
            onClick={() => setActiveFilter('women')}
          >
            Women's Couture (4)
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'men'}
            className={`filter-btn ${activeFilter === 'men' ? 'active' : ''}`}
            onClick={() => setActiveFilter('men')}
          >
            Men's Tailoring (4)
          </button>
        </div>

        {/* Editorial Collection Grid */}
        <div className="collection-editorial-grid">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="collection-card"
              onClick={() => setSelectedItem(item)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              role="button"
              aria-label={`Inspect look ${item.id}: ${item.name}`}
            >
              <div className="card-image-box">
                <img
                  src={item.image}
                  alt={item.name + ' — ' + item.concept}
                  className="card-fashion-img"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to placeholder if needed
                    e.target.style.opacity = '0.7';
                  }}
                />
                <span className="card-look-number">{item.id}</span>
                <div className="card-hover-overlay">
                  <span className="overlay-btn-text">Inspect Look &rarr;</span>
                </div>
              </div>

              <div className="card-info-box">
                <div className="card-category-row">
                  <span className="card-category-tag">{item.categoryLabel}</span>
                </div>
                <h3 className="card-title">{item.name}</h3>
                <p className="card-concept">{item.concept}</p>
                <div className="card-fabric-line">
                  <span className="fabric-dot" />
                  <span className="fabric-text">{item.fabric.split('&')[0]}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Lookbook Inspection Modal */}
        {selectedItem && (
          <CollectionModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}

      </div>
    </section>
  );
}

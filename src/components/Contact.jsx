import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Academic Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section className="editorial-section contact-section" id="contact">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <p className="editorial-label">COMMUNICATION</p>
          <h2 className="section-title">LET'S CONNECT</h2>
          <p className="section-subtitle">
            Inquiries regarding the Gilded Plumage academic concept, design research, and fashion technology exploration.
          </p>
          <div className="gold-accent-line" />
        </div>

        {/* Contact Layout */}
        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="contact-success-state">
              <div className="success-icon">&#10003;</div>
              <h3 className="success-title">Thank You for Connecting</h3>
              <p className="success-desc">
                Your message has been received within this frontend portfolio demonstration. As this website was developed for academic study in <em>Fashion and Technology</em>, no live email server is attached.
              </p>
              <button
                type="button"
                className="btn-primary-gold"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'Academic Inquiry', message: '' });
                }}
              >
                Send Another Inscription
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="editorial-contact-form">
              <div className="form-notice-box">
                <span className="notice-icon">&#9432;</span>
                <span className="notice-text">
                  Academic Subject Demonstration: This is a frontend-only form designed for academic evaluation.
                </span>
              </div>

              <div className="form-fields-grid">
                <div className="form-group">
                  <label htmlFor="name" className="field-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="field-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="field-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="e.g. eleanor@atelier.example"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="field-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="field-label">Inquiry Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="field-input field-select"
                >
                  <option value="Academic Inquiry">Academic Project Inquiry</option>
                  <option value="Design Methodology">Textile &amp; Technology Research</option>
                  <option value="Curricular Review">Faculty / Curricular Evaluation</option>
                  <option value="General Conversation">General Design Feedback</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="field-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Share your thoughts on the Gilded Plumage collection, textile concepts, or fashion technology integrations..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="field-input field-textarea"
                />
              </div>

              <div className="form-submit-row">
                <button type="submit" className="btn-primary-gold">
                  Submit Inscription
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

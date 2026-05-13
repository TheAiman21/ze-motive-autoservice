import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2><span>Contact</span> Us</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <a href="tel:+60123456789" className="contact-item">
            <span className="contact-icon">📞</span>
            <div>
              <strong>Phone</strong>
              <p>+60 12-345 6789</p>
            </div>
          </a>
          <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-icon">💬</span>
            <div>
              <strong>WhatsApp</strong>
              <p>Chat with us instantly</p>
            </div>
          </a>
        </div>
        
        <div className="contact-details">
          <h3>Visit Our Workshop</h3>
          <p className="contact-address">No. 123, Jalan Utama, Parit Raja, 86400 Batu Pahat, Johor</p>
          <div className="contact-hours">
            <p><strong>Operating Hours:</strong></p>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 3:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
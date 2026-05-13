import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2><span>Contact</span> Us</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <a href="tel:+60177705626" className="contact-item">
            <span className="contact-icon">📞</span>
            <div>
              <strong>Phone</strong>
              <p>+60 17-770 5626</p>
            </div>
          </a>
          <a href="https://wa.me/60177705626" target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-icon">💬</span>
            <div>
              <strong>WhatsApp</strong>
              <p>Chat with us instantly</p>
            </div>
          </a>
        </div>
        
        <div className="contact-details">
          <h3>Visit Our Workshop</h3>
          <p className="contact-address">JKB h68 LOT 6147 KG PARIT LONDANG 86400 BATU PAHAT JOHOR</p>
          <div className="contact-hours">
            <p><strong>Operating Hours:</strong></p>
            <p>Monday - Saturday: 9:00 AM - 5:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>git
    </section>
  );
};

export default Contact;
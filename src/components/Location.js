import React from 'react';
import './Location.css';
import workshopImage from '../images/gambarbengkel.png';

const Location = () => {
  return (
    <section id="location" className="location">
      <h2>Our <span>Location</span></h2>
      <div className="location-container">
        <div className="map-box">
          <img src={workshopImage} alt="ZE Motive Auto Services Workshop" className="workshop-img" />
        </div>
        <div className="location-details">
          <div className="info-row">
            <strong>📍 Address:</strong>
            <p>No. 123, Jalan Utama, Parit Raja, 86400 Batu Pahat, Johor</p>
          </div>
          <div className="info-row">
            <strong>🕐 Hours:</strong>
            <p>Mon-Fri: 9AM-6PM | Sat: 9AM-3PM | Sun: Closed</p>
          </div>
          <a
            href="https://maps.app.goo.gl/gjyNXiEiSW7v5DVi8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            📍 Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
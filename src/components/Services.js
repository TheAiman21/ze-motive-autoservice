import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { icon: '🔧', title: 'General Repair', desc: 'Complete general repair and maintenance for all vehicle types' },
    { icon: '⚙️', title: 'Spare Part Change', desc: 'Quality spare part replacement with genuine components' },
    { icon: '💻', title: 'System Diagnostic', desc: 'Advanced computerized system diagnostic and error code reading' },
    { icon: '✅', title: 'QC & Checking', desc: 'Thorough quality control inspection and vehicle health checking' },
    { icon: '🔍', title: 'Error Code Analysis', desc: 'Professional error code scanning and troubleshooting' },
    { icon: '🛠️', title: 'Full Service', desc: 'Comprehensive full vehicle service and maintenance package' },
  ];

  return (
    <section id="services" className="services">
      <h2>Our <span>Services</span></h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <span className="service-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
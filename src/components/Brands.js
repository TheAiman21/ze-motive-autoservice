import React from 'react';
import './Brands.css';

// Import all brand logos
import protonLogo from '../images/logos/proton.png';
import peroduaLogo from '../images/logos/perodua.png';
import toyotaLogo from '../images/logos/toyota.png';
import hondaLogo from '../images/logos/honda.png';
import nissanLogo from '../images/logos/nissan.png';
import bmwLogo from '../images/logos/bmw.png';
import mercedesLogo from '../images/logos/mercedes.png';
import mazdaLogo from '../images/logos/mazda.png';

const Brands = () => {
  const brands = [
    { name: 'Proton', logo: protonLogo },
    { name: 'Perodua', logo: peroduaLogo },
    { name: 'Toyota', logo: toyotaLogo },
    { name: 'Honda', logo: hondaLogo },
    { name: 'Nissan', logo: nissanLogo },
    { name: 'BMW', logo: bmwLogo },
    { name: 'Mercedes', logo: mercedesLogo },
    { name: 'Mazda', logo: mazdaLogo },
  ];

  return (
    <section id="brands" className="brands">
      <h2>Car Brands We Have <span>Experience With</span></h2>
      <div className="brands-grid">
        {brands.map((brand, i) => (
          <div key={i} className="brand-card">
            <img src={brand.logo} alt={brand.name} className="brand-logo" />
            <p>{brand.name}</p>
          </div>
        ))}
      </div>
      <p className="brands-extra-text">Any car, really!</p>
    </section>
  );
};

export default Brands;
import React, { useState } from "react";
import './Services.css';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.png';

function Services() {
  
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>

      <div className="services-container">
        {Services_Data.map((services, index) => {
          const isExpanded = expanded[index];
          const shortDesc = services.s_desc.split(' ').slice(0, 5).join(' ') + (services.s_desc.split(' ').length > 5 ? '...' : '');
          return (
            <div key={index} className="services-format">
              <h3>{services.s_no}</h3>
              <h2>{services.s_name}</h2>
              <p>{isExpanded ? services.s_desc : shortDesc}</p>
              <div className="services-readmore" onClick={() => toggleExpand(index)}>
                <p>{isExpanded ? 'Read Less' : 'Read More'}</p>
                <img src={arrow_icon} alt='' />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
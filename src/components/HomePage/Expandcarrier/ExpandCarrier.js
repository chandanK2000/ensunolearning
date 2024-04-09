import React from 'react';
import './Expandcarrier.css';

const ExpandCarrier = () => {
  const opportunities = [
    {
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-04-at-11.07.44-6.jpeg',
      title: 'Insurance',
      text: 'Start or scale your career in the fastest growing industry.',
      button: 'View Courses',
    },
    {
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-04-at-11.07.44-8.jpeg',
      title: 'Banking',
      text: 'Start your career in the banking sector with Ensueno Learning.',
      button: 'View Courses',
    },
    {
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-04-at-11.07.44-8.jpeg',
      title: 'Skill Development',
      text: 'Start or scale your career in the fastest growing industry.',
      button: 'View Courses',
    },
    {
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-04-at-11.07.44-8.jpeg',
      title: 'Finance',
      text: 'Start your career in the banking sector with Ensueno Learning.',
      button: 'View Courses',
    }
  ];

  return (
    <div>
      <h2 className="main-heading">Expand your career opportunities</h2>
      <div className="expand-carrier">
        {opportunities.map((opportunity, index) => (
          <div key={index} className="opportunity-block">
            <div className="opportunity-content">
              <div className="opportunity-image" style={{ backgroundImage: `url(${opportunity.image})` }}></div>
              <div className="opportunity-details">
                <h3 className="opportunity-title">{opportunity.title}</h3>
                <p className="opportunity-text">{opportunity.text}</p>
                <button className="view-courses-button">{opportunity.button}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandCarrier;

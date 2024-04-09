import React from 'react';
import './JobObjectives.css'; 

const JobObjectives = () => {
  const objectives = [
    {
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/02/WhatsApp_Image_2023-02-04_at_11.07.44__2__2_11zon-removebg-preview.png',
      title: 'Placement Opportunities',
      text: 'We don’t just offer a course, we provide placement opportunities too.'
    },
    {
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/02/4.jpg',
      title: 'Placement Opportunities',
      text: 'We don’t just offer a course, we provide placement opportunities too.'
    },
    {
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/02/WhatsApp_Image_2023-02-04_at_11.07.44_9_11zon-removebg-preview.png',
      title: 'Placement Opportunities',
      text: 'We don’t just offer a course, we provide placement opportunities too.'
    },
    {
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/02/3.jpg',
      title: 'Placement Opportunities',
      text: 'We don’t just offer a course, we provide placement opportunities too.'
    },
    {
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/02/2.jpg',
      title: 'Placement Opportunities',
      text: 'We don’t just offer a course, we provide placement opportunities too.'
    },
    {
      image: 'https://ensuenolearning.com/wp-content/uploads/2023/02/WhatsApp_Image_2023-02-04_at_11.07.44__3__3_11zon-removebg-preview.png',
      title: 'Placement Opportunities',
      text: 'We don’t just offer a course, we provide placement opportunities too.'
    },
  ];

  return (
    <div className='main_container'>
      <h1 className="main-heading">With our Job oriented programs, you can achieve your <br/>objectives.</h1>
      <div className="job-objectives">
        {objectives.map((objective, index) => (
          <div key={index} className="objective-block">
            <img src={objective.image} alt={objective.title} className="objective-image" />
            <h3 className="objective-title">{objective.title}</h3>
            <p className="objective-text">{objective.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobObjectives;

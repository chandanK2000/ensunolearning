import React from 'react';
import './Careersensueno.css';
const Careersensueno = () => {
  const jobPositions = [
    {
      title: 'Creative Lead',
      experience: '3+ yrs of experience',
    },
    {
      title: 'Marketing Manager',
      experience: '5+ yrs of experience',
    },
    {
      title: 'Web Developer',
      experience: '4+ yrs of experience',
    },
    {
      title: 'Graphic Designer',
      experience: '3+ yrs of experience',
    },
    {
      title: 'Content Writer',
      experience: '2+ yrs of experience',
    },
    {
      title: 'UI/UX Designer',
      experience: '4+ yrs of experience',
    },
  ];

  return (
    <div className="ensuenotlearning">
      <div className="heading">
        <h2>Careers at Ensueno Learning</h2>
        <p>We want to make agency life pleasant, productive and empowering</p>
      </div>
      <div className="job-grid">
        {jobPositions.map((job, index) => (
          <div className="job-card" key={index}>
            <h4>{job.title}</h4>
            <p>{job.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careersensueno;

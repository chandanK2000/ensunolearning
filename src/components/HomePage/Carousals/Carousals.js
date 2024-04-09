import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Carousals.css';

const Carousels = () => {
  const [index, setIndex] = useState(0);
  const candidates = [
    { id: 1, name: ' - Chandan Kumar', image: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=', about: 'Their course is very practical-oriented and extensive, which focuses on both domain knowledge and soft skills that will support your personal development' },
    { id: 2, name: '- Mohan jain', image: 'https://media.istockphoto.com/id/1450340623/photo/portrait-of-successful-mature-boss-senior-businessman-in-glasses-asian-looking-at-camera-and.webp?b=1&s=170667a&w=0&k=20&c=Y-i6neXzFNqZYgMQintvHOyQco4blEVprSWU8RlmT2I=', about: 'Their course is very practical-oriented and extensive, which focuses on both domain knowledge and soft skills that will support your personal development' },
    { id: 3, name: '- Ranveer kumar', image: 'https://media.istockphoto.com/id/1633957958/photo/a-smiling-male-freelancer-with-eyeglasses-using-a-phone-while-working-over-a-laptop.jpg?s=1024x1024&w=is&k=20&c=worCS5Mk4P_p4OpsofqJXWZWDwjXE58Gbkm_oXDzTok=', about: 'Their course is very practical-oriented and extensive, which focuses on both domain knowledge and soft skills that will support your personal amit' },
  ];

  const [selectedCandidate, setSelectedCandidate] = useState(candidates[index]);

  const handlePrev = () => {
    const prevIndex = index === 0 ? candidates.length - 1 : index - 1;
    setIndex(prevIndex);
    setSelectedCandidate(candidates[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = index === candidates.length - 1 ? 0 : index + 1;
    setIndex(nextIndex);
    setSelectedCandidate(candidates[nextIndex]);
  };

  const handleImageClick = (idx) => {
    setIndex(idx);
    setSelectedCandidate(candidates[idx]);
  };

  return (
    <div className="carousel-container">
      <h3>Start your career in BFSI with Ensueno Learning</h3>
      <div className="carousel-info">
        <p>{selectedCandidate.about}</p>
        <h5>{selectedCandidate.name}</h5>
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <div className="carousel-images">
        {candidates.map(candidate => (
          <img
            key={candidate.id}
            className={`carousel-image ${candidate.id === selectedCandidate.id ? 'active' : ''}`}
            src={candidate.image}
            alt={candidate.name}
            onClick={() => handleImageClick(candidate.id - 1)}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Carousels;

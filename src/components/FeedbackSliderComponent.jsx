import React, { useState } from 'react';

function FeedbackSlider({ reviews }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous feedback
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  // Function to go to the next feedback
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='review-component'>
      <div className='arrow' onClick={handlePrev}>&lt;</div>
      <div className='review-text'>{reviews[currentIndex]}</div>
      <div className='arrow' onClick={handleNext}>&gt;</div>
    </div>
  );
}

export default FeedbackSlider;

import React from 'react';
import FeedbackSlider from './FeedbackSliderComponent';

function FeedbackComponent() {
  // Array of feedbacks to pass as props
  const feedbacks = [
    "I had a wonderful time working with Kartik; His flexibility, knowledge of human behaviour, and UX design are remarkable and an asset for any client.",
    "Kartik's attention to detail and commitment to delivering exceptional results were truly impressive. His ability to adapt and offer creative solutions is outstanding.",
    "Collaborating with Kartik was a great experience. His deep understanding of design principles and user-centered approach brought a unique perspective to our project.",
    "Kartik is an absolute pleasure to work with. His innovative thinking and ability to translate ideas into visually appealing designs helped elevate our project to new heights.",
    "Kartik's professionalism, technical expertise, and dedication to creating meaningful user experiences make him an invaluable asset to any team."
  ];
  

  return (
    <div>
      <FeedbackSlider reviews={feedbacks} />
    </div>
  );
}

export default FeedbackComponent;


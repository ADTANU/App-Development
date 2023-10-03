import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../assets/css/carouselActive.css';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const dummyFeedbackData = [
  {
    id: 1,
    username: 'User 1',
    feedbackText: 'This website is awesome!',
  },
  {
    id: 2,
    username: 'User 2',
    feedbackText: 'Great job on the design!',
  },
  {
    id: 3,
    username: 'User 3',
    feedbackText: 'I found the website very useful.',
  },
  {
    id: 4,
    username: 'User 4',
    feedbackText: 'Excellent work!',
  },
  {
    id: 5,
    username: 'User 5',
    feedbackText: 'The best website ever!',
  },
];

export const CarouselActive = () => (
  <AliceCarousel
    mouseTracking
    items={dummyFeedbackData.map((feedback) => (
      <div className="carousel-item" key={feedback.id}>
        <div className="item" data-value={feedback.username}>
          {feedback.feedbackText}
        </div>
      </div>
    ))}
    responsive={responsive}
    controlsStrategy="alternate"
  />
);

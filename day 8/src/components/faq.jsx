import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../assets/css/faq.css';

function FAQ() {
  const navigate = useNavigate(); // Initialize navigate
  const faqData = [
    {
      question: 'What is CURRENSYNC?',
      answer:
        'CURRENSYNC is a currency exchange platform that allows users to exchange currencies at the most up-to-date rates.',
    },
    {
      question: 'How do I sign up for CURRENSYNC?',
      answer: 'You can sign up for CURRENSYNC by visiting our website and clicking on the "Sign Up" button.',
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Yes, we take security seriously and use encryption to protect your personal information.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact our customer support team by emailing support@currensync.com.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  // Function to handle the back button click
  const handleBackClick = () => {
    navigate(-1); // Use navigate to navigate back
  };

  return (
    <div className="faq-container">
      <h1 className='heading_faq'> Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-question">{faq.question}</div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
      
      {/* Back button */}
      <button onClick={handleBackClick} className="back-buttonfaq">Back</button>
    </div>
  );
}

export default FAQ;

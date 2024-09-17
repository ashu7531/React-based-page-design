import React from 'react';
import FAQComponent from './FAQComponent';

function QuestionAnswerComponent() {
  const faqData = [
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days of purchase."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to select countries."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive an email with the tracking details."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive an email with the tracking details."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive an email with the tracking details."
    }
  ];

  return (
    <div>
      <FAQComponent faqs={faqData} />
    </div>
  );
}

export default QuestionAnswerComponent;

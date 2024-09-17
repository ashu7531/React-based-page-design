import React from 'react';
import FAQComponent from './FAQComponent';

function QuestionAnswerComponent() {
  const faqData = [
    {
      question: "How long does it take to build a website?",
      answer: "Websites can range so much in terms of content and complexity that it is impossible to answer directly without knowing the details. Don't worry I will give you the estimated timeline for both design and development work before every project. But usually it takes from 1-4 weeks."
    },
    {
      question: "How much does a project cost?",
      answer: "The cost of a project depends on the complexity and scope of the work. After discussing your requirements, I can provide a custom quote based on the specific features and functionality you need."
    },
    {
      question: "What services do you offer exactly?",
      answer: "I offer a wide range of services including web design, web development, UI/UX design, branding, SEO optimization, and maintenance. I can also provide custom solutions tailored to your specific needs."
    },
    {
      question: "What if I have the website designed but need development only?",
      answer: "Yes, I can work on development-only projects as well. If you already have the design files ready, I can help you bring your vision to life by coding and building the website according to your design."
    },
    {
      question: "Can you create custom illustrations, icons or mockups for me?",
      answer: "Yes, I can create custom illustrations, icons, and mockups based on your project's requirements. I work with design tools to create unique and personalized visual elements for your website or app."
    }
  ];

  return (
    <div>
      <FAQComponent faqs={faqData} />
    </div>
  );
}

export default QuestionAnswerComponent;

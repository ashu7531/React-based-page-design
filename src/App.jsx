import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import Header from './components/Header';
import InfoComponent from './components/InfoComponent';
import ProjectComponent from './components/ProjectComponent';
import FeedbackComponent from './components/FeedbackComponent';
import QuestionAnswerComponent from './components/QuestionAnswerComponent';
import WorkWithMeComponent from './components/WorkWithMeComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <>
      <div>
        <NavbarComponent />
        <Header headerText="CREATIVE UI/UX DESIGNER & WEB DEVELOPER" />
        <InfoComponent />
        <ProjectComponent />
        <FeedbackComponent />
        <QuestionAnswerComponent />
        <WorkWithMeComponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default App;

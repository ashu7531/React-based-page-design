import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';
import Header from './components/Header';
import InfoComponent from './components/InfoComponent';
import ProjectComponent from './components/ProjectComponent';
import ReviewComponent from './components/ReviewComponent';
import FAQComponent from './components/FAQComponent';
import CommentComponent from './components/CommentComponent';
import FooterComponent from './components/FooterComponent';

function App() {

  return (
    <>
      <div>
        <NavbarComponent />
        <Header headerText="CREATIVE UI/UX DESIGNER & WEB DEVELOPER" />
        <InfoComponent />
        <ProjectComponent />
        <ReviewComponent review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nulla assumenda eveniet incidunt eum ex suscipit quaerat laboriosam laudantium, neque iusto nisi corrupti libero sunt commodi ea enim accusamus facere inventore et numquam quae quibusdam adipisci eligendi. Iste pariatur repudiandae quo ipsam aperiam maxime adipisci est id, velit veritatis mollitia!" />
        <FAQComponent />
        <CommentComponent />
        <FooterComponent />
        </div>
    </>
  )
}

export default App

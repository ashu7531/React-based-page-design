import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import './customStyles.css'; // Import your custom CSS

function CollapsibleExample() {
  return (
    <Navbar expand="lg" className="customNavbar">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand href="#home">Kartik Bansal</Navbar.Brand> {/* This will be white */}
          </Nav>
          <Nav>
            <Button variant="light" className="rounded-pill">Contact</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

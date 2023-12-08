import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { Outlet } from 'react-router-dom';

function NavigationBar() {
  return (<>
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Firtilizer Suggestion</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/Home">
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/AboutUs">
              <Nav.Link >About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/FertilizerGuide">
              <Nav.Link >Fertilizer Guide</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Login">
              <Nav.Link >Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Signup">
              <Nav.Link >Sign Up</Nav.Link>
            </LinkContainer>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  );
}

export default NavigationBar; 
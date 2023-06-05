import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Navbar bg="white" fixed="top">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src="/images/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
            Angelina Huerta Cortés
          </Navbar.Brand>
        <Nav justify variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link eventKey="home-link" as= {Link} to={{pathname:"/"}}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="about-link" as = {Link} to={{pathname:"/about"}}>About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="portfolio-link" as= {Link} to={{pathname:"/portfolio"}}>
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contact-link" as= {Link} to={{pathname:"/contact"}}>
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="resume-link" as = {Link} to={{pathname:"/resume"}}>
              Resume
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation;
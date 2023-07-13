import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function Footer() {
  return (
    <Navbar bg="white" fixed='bottom'>
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          
          <Navbar.Text>
          Angelina Huerta Cortés Copyright© 2023
          </Navbar.Text>

          <Navbar.Text>
          <Image src="https://vitejs.dev/logo.svg" width="25" height="25"/> + <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" width="25" height="25"/>
          </Navbar.Text>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;
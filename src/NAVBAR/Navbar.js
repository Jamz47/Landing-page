import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";
import Dodge_logo from "../assets/Dodge_logo.png";

function Navigationbar() {
  return (
    <div className="NAVBAR">
      <Container>
        <Navbar>
          <Navbar.Brand href="#">
            <span>
              <img src={Dodge_logo} alt="dodge-logo" />
            </span>
          </Navbar.Brand>

          <Nav className="navlink">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT US</Nav.Link>
            <Nav.Link href="#services">SERVICES</Nav.Link>
            <Nav.Link href="#vehicles">VEHICLES</Nav.Link>
            <Nav.Link href="#carrer">CARRER</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}

export default Navigationbar;

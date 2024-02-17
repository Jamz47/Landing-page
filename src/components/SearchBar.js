import "./SearchBar.css";
import Dodge_logo from "../assets/Dodge_logo.png"
import {InputGroup, Row, Form, Col, Button} from 'react-bootstrap'

const SearchBar = () => {
  return( 
  <div className="SearchBar" id="carrer">
    <div className="logo-img"><img src={Dodge_logo} alt="logo" /></div>
    <div className="logo-img"><p>CONTACT US</p></div>
    <div className="logo-img"><p>SITE MAP</p></div>
    <div className="logo-img"><p>CARRERS</p></div>
    <div ><InputGroup>
    <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button variant="outline-primary" type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </InputGroup></div>
  </div>
)};

export default SearchBar;

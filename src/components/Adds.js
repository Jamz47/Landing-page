import { Container } from "react-bootstrap";
import "./Adds.css";
import Shirts from "../assets/Shirts.png";
const Adds = () => {
  return (
    <div className="contain">
      <Container className="contain">
        <div className="left-shirt">
          <img src={Shirts} alt="" />{" "}
        </div>
        <div className="right-shirt">
          <h1>
            H<span>O</span>T <br />
            SHI<span>R</span>TS
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default Adds;

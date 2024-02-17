import Carousel from "react-bootstrap/Carousel";
import "./Carousels.css";
import SRT from "../assets/SRT.png";
import Ram from "../assets/Ram.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

function Carousels() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div className="carous">
            <div className="right-box">
              <p>
                LEASE A <br />
                <span> 2023 DODGE DURANGO</span>
                <br />
                FOR
                <br />
                <span>$499 PER MONTH FOR 24 MONTHS.</span>
                <br />
                $4199 DUE AT SIGNING. NO SECURITY DEPOSIT REQUIRED
                <br />
                Lease payment term has foctored in a $7,000 EV incentive,
                provide by lender.
              </p>
            </div>

            <div>
              <img src={SRT} alt="" />
            </div>
          </div>
          <Carousel.Caption>
            <p>Show Room</p>
            <FontAwesomeIcon className="font-icon" icon={faAnglesDown} />
          </Carousel.Caption>
        </Carousel.Item>
        {/* 2nd  */}
        <Carousel.Item>
          <div className="carous">
            <div className="right-box">
              <p>
                LEASE A <br />
                <span> 2024 DODGE HORNET R/T</span>
                <br />
                FOR
                <br />
                <span>$399 PER MONTH FOR 24 MONTHS.</span>
                <br />
                $4199 DUE AT SIGNING. NO SECURITY DEPOSIT REQUIRED
                <br />
                Lease payment term has foctored in a $7,000 EV incentive,
                provide by lender.
              </p>
            </div>

            <div>
              <img src={Ram} alt="" />
            </div>
          </div>
          <Carousel.Caption>
            <p>Show Room</p>
            <FontAwesomeIcon className="font-icon" icon={faAnglesDown} />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carousels;

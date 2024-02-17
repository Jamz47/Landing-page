import "./Banner2.css";
import { Button } from "react-bootstrap";

const flex =
  "https://i.pinimg.com/originals/92/ba/ef/92baef9fdf05244a6eb82a43b3b0384d.jpg";

const Banner2 = () => {
  return (
    <div className="Banner2">
      <div className="banner-size2">
        <img src={flex} alt="" />
        <div class="bottom-right">
          <p>
           <span>
            BORN TO RACE? <br />
            WE’LL SHOW YOU HOW</span>
            <br />
            Radford Racing School, the Official High- Performance Driving School
            of Dodge//SRT®, is offering world-class driving programs and
            experiences to anyone who wants to learn the ways of the <br/>
            track—whether you own an SRT or not. That said, new SRT owners have
            a chance to sign up for a special one-day SRT class where they can
            learn how to handle their vehicle's power and capabilities.
          </p>
          <Button variant="danger">BURN IT UP</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;

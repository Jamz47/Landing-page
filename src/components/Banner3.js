import "./Banner3.css";
import { Button } from "react-bootstrap";

const flex =
  "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/challenger/performence/desktop/MY23_Challenger_Performance_Desktop_Heroposter.jpg";

const Banner3 = () => {
  return (
    <div className="Banner3">
      <div className="banner-size1">
        <img src={flex} alt="" />
        <div class="bottom-left1">
          <p>
            <span>CURRENT OFFERS</span>
            <br />
            We’re offering special deals to make sure you can get into the Dodge
            Brand vehicle that fits you. Check out what’s available now.
          </p>
          <Button variant="outline-danger">LEARN MORE</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner3;

import "./Banner.css";
import {Button} from 'react-bootstrap'

const flex =
  "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/dodge-muscle/desktop/SW_DodgeMuscle_Hero_banner_Desktop.jpg";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="banner-size">
        <img src={flex} alt="" />
        <div class="bottom-left">
        <p>  PERFORMANCE<br />
          REDEFINED<br />
          THE 2024<br />
          HORNETBottom Left <br/></p>
          <Button variant="outline-danger">LEARN MORE</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

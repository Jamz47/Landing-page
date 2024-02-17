import "./Home.css";
import {Card, Button,Container} from 'react-bootstrap';
import Dodge_1 from '../assets/Dodge_1.png'
import Dodge_2 from '../assets/Dodge_2.png'
import Dodge_3 from '../assets/Dodge_3.png'
import Dodge_4 from '../assets/Dodge_4.png'


const Home = () => {
  return (
    <Container style={{backgroundColor:'black'}} className="Home" id='home'>
    
      <div className="head-title"><h1>DODGE PERFORMANCE VEHICLES</h1></div>
      
      <div className="blocks" >
      <div><Card style={{ width: '18rem' }} id="vehicles">
      <Card.Img className="image-size" variant="top" src={Dodge_1} />
      <Card.Body style={{backgroundColor:'black'}}>
        <Card.Title style={{color:'white'}}>2023 DURANGO</Card.Title>
        <Card.Text style={{color:'white'}}>
          MSRP* STARTING AT<br/>
          $31,000
        </Card.Text>
        <Button variant="outline-warning">Get Yours </Button>
      </Card.Body>
    </Card>
    </div>
    <div><Card style={{ width: '18rem' }}>
      <Card.Img className="image-size" variant="top" src={Dodge_2} />
      <Card.Body style={{backgroundColor:'black'}}>
        <Card.Title style={{color:'white'}}>2023 CHARGER</Card.Title>
        <Card.Text style={{color:'white'}}>
        MSRP* STARTING AT<br/>
          $35,325
        </Card.Text>
        <Button variant="outline-warning">Get Yours </Button>
      </Card.Body >
    </Card></div>
    <div><Card style={{ width: '18rem' }}>
      <Card.Img className="image-size" variant="top" src={Dodge_3} />
      <Card.Body style={{backgroundColor:'black'}}>
        <Card.Title style={{color:'white'}}>2023 VIPER</Card.Title>
        <Card.Text style={{color:'white'}}>
        MSRP* STARTING AT<br/>
          $50,800
        </Card.Text>
        <Button variant="outline-warning">Get Yours </Button>
      </Card.Body>
    </Card></div>
    <div><Card style={{ width: '18rem' }}>
      <Card.Img className="image-size" variant="top" src={Dodge_4} />
      <Card.Body style={{backgroundColor:'black'}}>
        <Card.Title style={{color:'white'}}>2023 CHALLENGER</Card.Title>
        <Card.Text style={{color:'white'}}>
        MSRP* STARTING AT<br/>
          $40,100
        </Card.Text>
        <Button variant="outline-warning">Get Yours </Button>
      </Card.Body>
    </Card></div>
        
      </div>
    
    </Container>
  );
};

export default Home;

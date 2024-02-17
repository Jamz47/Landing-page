import "./Adds2.css";
import ad1 from "../assets/ad1.png";
import ad2 from "../assets/ad2.png";
import ad3 from "../assets/ad3.png";
import ad4 from "../assets/ad4.png";


const Adds2 = () => {
  return (
    <>
    <div className="adds2">
      <div className="add-one">
        <img src={ad1} alt="1" />
        <p>
         <span>STEP 1. SEE WHAT THEY GOT</span>
         <br /><br /> Find the Dodge Brand vehicle that suits your needs at the
          dealership of your choice.
        </p>
      </div>
      <div className="add-one">
        <img src={ad2} alt="2" />
        <p>
         <span>STEP 2. PRICE IT OUT</span>
         <br /><br /> Enter your payment preferences and choose financing to fit your budget.
        </p>
      </div>
      <div className="add-one">
        <img src={ad3} alt="3" />
        <p>
         <span>STEP 3. DO THE WORK</span>
         <br /><br /> Complete all of the necessary paperwork online and save time at the dealership.
        </p>
      </div>
      <div className="add-one">
        <img src={ad4} alt="4" />
        <p>
         <span>STEP 4. LOCK IT DOWN</span>
         <br /><br /> Confirm your preferences with the dealership and choose delivery options.
        </p>
      </div>
      
    </div>
    <div className="button-one">
      <button>SHOPE ONLINE</button></div>
    </>
  );
};

export default Adds2;

import '../../App.css';
import '../../css/btn.css';

function PhoneCall(props) {
  return (
    <div className="phonCallBox flexRow center">
      <div className="PhoneCircle fa fa-phone bg  ">

      </div>
      <div className={"DetailsLine "+props.class}>
        <h3>24/7<span className='calltext'>EMERGENCY LINE</span></h3>
        <h3 className="phoneNUMBER"> <a href="tel:6472544341">647-289-4980</a> </h3>
      </div>
    
    </div>
  );
}

export default PhoneCall;

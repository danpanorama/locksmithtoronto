import '../../App.css';
import '../../css/btn.css';

function PhoneCall(props) {
  return (
    <div className="phonCallBox flexRow center">
      <div className="PhoneCircle fa fa-phone  ">

      </div>
      <div className={"DetailsLine "+props.class}>
        <h3>24/7<span className='calltext'>EMERGENCY LINE</span></h3>
        <h3 className="phoneNUMBER">765-634-6234</h3>
      </div>
    
    </div>
  );
}

export default PhoneCall;

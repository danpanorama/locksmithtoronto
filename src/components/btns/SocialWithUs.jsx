import '../../App.css';
import '../../css/btn.css';
import CallButtons from './CallButtons';
import Socialbtn from './Socialbtn';

function SocialWithUs() {
  return (
    <div className="flexRowToCol center ">
        <h1 className='displayNone' >SOCIAL WITH US & SAY HELLO </h1>

       <div className="displayNone">
       <Socialbtn  />
       </div>
        <CallButtons/>
   
    </div>
  );
}

export default SocialWithUs;

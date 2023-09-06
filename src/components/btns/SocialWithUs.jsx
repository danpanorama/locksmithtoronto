import '../../App.css';
import '../../css/btn.css';
import CallButtons from './CallButtons';
import Socialbtn from './Socialbtn';

function SocialWithUs() {
  return (
    <div className="flexRow center ">
        <h1 className='displayNone' >SOCIAL WITH US & SAY HELLO </h1>

        <Socialbtn  />
        <CallButtons/>
   
    </div>
  );
}

export default SocialWithUs;

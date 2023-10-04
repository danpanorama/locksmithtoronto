import { Link } from 'react-router-dom';
import '../../App.css';
import '../../css/btn.css';

function ButtonsSec(props) {
  return (
    <div className="flexRow btnSec center">
      
        <Link to="/service" className="grey-btn cw">OUR SERVICES</Link>
        <a href="tel:6472544341" className="blue-btn">CALL ME</a>
   
    </div>
  );
}

export default ButtonsSec;

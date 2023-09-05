import '../../App.css';
import '../../css/logo.css';


function HeaderService(props) {
  return (
    <div className="bcWhite">
        <h1 className="h1ServiceHeader">{props.h1Service}</h1>
        <h1 className="blueHeaderH1">{props.blueh1}</h1>

        
  
    </div>
  );
} 

export default HeaderService;





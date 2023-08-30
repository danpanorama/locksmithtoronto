import '../../App.css';
import '../../css/service.css';


function ServiceSquare() {
  return (
    <div className="OneSquare">

<div className="imageDiv">
    <img className='img' src={props.img} alt="" />
</div>
<div className="header">{props.header}</div>

<div className="paregraph">
    {props.text}
</div>
    

    
    </div>
  );
}

export default ServiceSquare;





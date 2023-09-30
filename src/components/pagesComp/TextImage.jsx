import '../../App.css';
import '../../css/nav.css';
import Toronto from '../../images/toronto.jpg'


function TextImage(props) {
  return (
    <div className="flexRowToCol reverse marginTop50">
        
        <div className="textDIV paddingLeftRight">
        <header className="boxHeader colorOrange">
            {props.boxHeader}
        </header>
            <p className="textP">{props.text}</p>
        </div>
        <div className="imgDiv ">
            <img src={props.img ? props.img : Toronto} alt="" className={"img  " + props.torontoclass} />
        </div>
        

       
    
    </div>
  );
}

export default TextImage;

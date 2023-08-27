import '../../App.css';
import '../../css/nav.css';


function TextImage(props) {
  return (
    <div className="flexRow marginTop50">
        
        <div className="textDIV">
        <header className="boxHeader colorOrange">
            {props.boxHeader}
        </header>
            <p className="textP">{props.text}</p>
        </div>
        <div className="imgDiv ">
            <img src={props.img} alt="" className="img" />
        </div>
        

       
    
    </div>
  );
}

export default TextImage;

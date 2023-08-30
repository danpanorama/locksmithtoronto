import '../../App.css';
import '../../css/nav.css';


function ImageText(props) {
  return (
    <div className="flexRowToCol marginTop50">
        <div className="imgDiv ">
            
            <img src={props.img} alt="" className="img" />
        </div>
        <div className="textDIV paddingLeftRight">
        <header className="boxHeader colorOrange">
            {props.boxHeader}
        </header>
            <p className="textP">{props.text}</p>
        </div>

       
    
    </div>
  );
}

export default ImageText;

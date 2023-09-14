import "../../App.css";
import "../../css/service.css";
import Img1 from '../../images/keyfree.jpg'
import Img2 from '../../images/car-key.jpg'

function ServiceSquare(props) {

  

  return (
    <div className="OneSquare">
      <div className="imageDiv">
        <img className="img imgService" src={props.img  } alt="" />
      </div>
      <div className="header-fontService">{props.header}</div>

      <div className="headerBlue">{props.text}</div>

      <div className="List marginTop20">
        <ul className="LinkList">
          {props.linkList.map((e) => {
            return <li className="linkList fontsLine">{e}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default ServiceSquare;

import "../../App.css";
import "../../css/service.css";

function ServiceSquare(props) {
  return (
    <div className="OneSquare">
      <div className="imageDiv">
        <img className="img" src={props.img} alt="" />
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

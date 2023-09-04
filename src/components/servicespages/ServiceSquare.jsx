import "../../App.css";
import "../../css/service.css";

function ServiceSquare(props) {
  return (
    <div className="OneSquare">
      <div className="imageDiv">
        <img className="img" src={props.img} alt="" />
      </div>
      <div className="header">{props.header}</div>

      <div className="paregraph">{props.text}</div>

      <div className="List">
        <ul className="LinkList">
          {props.linkList.map((e) => {
            return <li className="linkList">{e}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default ServiceSquare;

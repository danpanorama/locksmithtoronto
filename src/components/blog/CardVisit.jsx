import "../../css/home.css";
import "../../css/visitblog.css";

function CardVisit(props) {
  return (
    <div className="change-your-lock ">
      <img src={props.image} alt="" />

      <div className="content">
        <h3>{props.h3}</h3>
        <span>{props.span}</span>
        <p>{props.text}</p>
        <a href="">Read more</a>
      </div>
    </div>
  );
}

export default CardVisit;

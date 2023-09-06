import "../../css/home.css";
import "../../css/about.css";
import '../../css/details.css'


function DetailRow(props) {
  return (
  
   
    <div className={props.class +"  flexRowToCol marginBottomPhone"}>
    {!(props.active)?      <div className="thumbnail ">
      <img src={props.image} alt="" className="img thumbnailimg" />
     </div>:
     <div className="f"></div>
     }
 <div className="description ">
  <h1 className="headerDetail">{props.Header}</h1>
  <span className="choseSpan">{props.Span}</span>
 <p className="choose-rowP">
{props.pText}
 </p>
 <a href="" className="choose-rowA">Read More</a>
 </div>
 
     
 {props.active?      <div className="thumbnail ">
      <img src={props.image} alt="" className="img thumbnailimg" />
     </div>:
     <div className="f"></div>
     }
      </div>


  
 
      
     

  );
}

export default DetailRow;

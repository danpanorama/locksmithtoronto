import "../../css/home.css";
import "../../css/about.css";
import '../../css/details.css';
import Img1 from '../../images/changelock.jpeg'
import Img2 from '../../images/towlocks.jpeg'
import Img3 from '../../images/yellowlocks.jpeg'


function DetailRow(props) {
  return (
    <div className={props.class +"  flexRowToCol  marginBottomPhone"}>
    {!(props.active)?      <div className="thumbnail ">
      <img src={(props.image == '1')? (Img1):
    (props.image == '2') ? (Img2): (props.image == '3')? (Img3):''} alt="" className="img thumbnailimg" />
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
      <img src={(props.image == '1')? (Img1):
    (props.image == '2') ? (Img2): (props.image == '3')? (Img3):''} alt="" className="img thumbnailimg" />
     </div>:
     <div className="f"></div>
     }
      </div>


  
 
      
     

  );
}

export default DetailRow;

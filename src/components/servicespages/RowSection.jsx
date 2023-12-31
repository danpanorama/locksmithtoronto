

import '../../App.css';
import '../../css/service.css';
import Toronto from '../../images/toronto.jpg'



function RowSection(props) {
  return (
    <div className={"flexRowToCol center marb " + props.class} >
        <div className="image w50 ">
          <img src={  props.img ? props.img : Toronto} className={"imageMaxWith " + props.imgclass } alt="" />
          </div>
        <div className="text w50 flexCol tapadd">
          <h1 className="heading3 ">
            {props.header}
          </h1>
          <p className="pserv">
            {props.text}
          </p>

        </div>
       </div>
  );
} 

export default RowSection;





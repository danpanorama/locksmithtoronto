

import '../../App.css';
import '../../css/nav.css';


function ImageWithText(props) {
  return (
    <div className="   bgBlue">
  <div className="flexRowToCol  containerL">
        
  <div className="imageServiseDiv">
<img src={'https://www.frontrangelocksmith.com/images/man-thumbnail.png'} alt="" className="img serviceImage displayNone" />
</div>
<div className="content2">
<p className="textText paddphone">
{props.text}
</p>
</div>
  </div>
       
    
    </div>
  );
}

export default ImageWithText;

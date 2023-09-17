

import '../../App.css';
import '../../css/nav.css';


function ImageWithText(props) {
  return (
    <div className="   bgBlue">
  <div className="flexRow  containerL">
        
  <div className="imageServiseDiv">
<img src={'https://www.frontrangelocksmith.com/images/man-thumbnail.png'} alt="" className="img serviceImage" />
</div>
<div className="content2">
<p className="textText">
{props.text}
</p>
</div>
  </div>
       
    
    </div>
  );
}

export default ImageWithText;

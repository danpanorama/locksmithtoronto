import '../../css/details.css';
import Img1 from '../../images/card.jpeg'
import Img2 from '../../images/location.jpeg'

import Img3 from '../../images/trust.jpeg'

import Img4 from '../../images/wheel.jpeg'

import Img5 from '../../images/wheel25.jpeg'


function OneBanner(props) {
  return (
    <div className="flexCol center oneDetaisBanner">
        <img src={((props.img == '1')?(Img4):
        (props.img == '2')?(Img2):
        (props.img == '5')?(Img3):
        (props.img == '4')?(Img1):
        (props.img == '3')?(Img5):
        ('')
        
        
        )} alt="" className="imgBanner img" />
        <h4 className="h4Detais">{props.header}</h4>
        <p className="paregraph">{props.text}</p>
     
    </div>
  );
}

export default OneBanner;

import '../../css/details.css';

function OneBanner(props) {
  return (
    <div className="flexCol center oneDetaisBanner">
        <img src={props.img} alt="" className="imgBanner img" />
        <h4 className="h4Detais">{props.header}</h4>
      <p className="paregraph">{props.text}</p>
     
    </div>
  );
}

export default OneBanner;

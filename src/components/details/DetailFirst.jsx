import "../../css/home.css";
import "../../css/about.css";
import { Link } from "react-router-dom";

function DetailFirst(props) {
  return (
    <div className="flexRowToCol marginTop70 ">
<div className="imageDiv w40 marginRight ">
<img className="img Image" src={'https://res.cloudinary.com/dt0sbcfc6/image/upload/v1572202829/denver/giving-keys.jpg'} alt="" />
</div>   
<div className="wordsSide flexCol ">
    <h1 className="h1HeaderDetails">Locked out of your Car?</h1>
    <span className="spanDetails">We have the complete set of tools and skills required to efficiently unlock cars of any brand without causing any damage.</span>
<h5 className="choose-rowh5">How it works:</h5>
<ul className="ulLi" >
    <li>Feel free to contact us or provide your phone number above.</li>
    <li>Share your current location.</li>
    <li>Our team will dispatch a skilled locksmith to your location in just a matter of minutes.</li>
</ul>
<h5 className="header5Details">It is THAT simple!</h5>
<Link to={'/servicepage'} state={{
      header:'Lost Your Car Key in toronto, ON',
      headerBlue:'Car Opening Service in toronto',
      textHeader:"Did you lock your key in your car in toronto or the surrounding area? You came to the right place. We will get you back in no time. We offer car opening emergency service 24 hours a day 7 days a week. All of our locksmiths are highly trained professionals with years of experience opening cars. If your keys are locked in the trunk and the trunk release button doesn't work, we can still unlock it with our tools, damage free."}
      }>
    Read more



</Link>
</div>
   
    </div>
  );
}

export default DetailFirst;

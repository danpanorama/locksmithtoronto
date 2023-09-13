import "../../css/home.css";
import "../../css/about.css";

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
<a href="" className="readeMore">
    Read more
</a>
</div>
   
    </div>
  );
}

export default DetailFirst;

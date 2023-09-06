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
    <span className="spanDetails">We are fully equipped to unlock cars from all brands, quickly and damage free</span>
<h5 className="choose-rowh5">How it works:</h5>
<ul className="ulLi" >
    <li>Call us or leave your number above</li>
    <li>Tell us where you are</li>
    <li>We will send one of our professional locksmiths to you within minutes</li>
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

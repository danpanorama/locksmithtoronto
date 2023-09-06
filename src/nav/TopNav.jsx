import "../App.css";
import PhoneCall from "../components/btns/PhoneCall";
import Socialbtn from "../components/btns/Socialbtn";
import Logo from "../components/logo/Logo";
import "../css/nav.css";
import NavLinks from "./NavLinks";
import PhoneNav from "./PhoneNav";

function TopNav() {
  return (
 
<header>
<div className="container">
<div className="logo">
<a href="/">
<img src="images/logo.png" alt="Logo" title/>
</a>
</div>
<div className="header-right">
<div className="social-icon">
<ul>
<li><a href="https://www.facebook.com/frontrangelocksmith/" target="_blank"><img src="fonts/facebook.svg" alt="Facebook Logo"/></a></li>
<li><a href="https://twitter.com/FrontLocksmith" target="_blank"><img src="fonts/Twitter_icon.svg" alt="Twitter Logo"/></a></li>
<li><a href="https://www.youtube.com/c/Frontrangelocksmith" target="_blank"><img src="fonts/youtube1.svg" alt="Youtube Logo"/></a></li>
</ul>
</div>
<div className="contact-detail">
<p> <span>24/7</span> EMERGENCY LINE</p>
<a href="tel:7204394081"><strong>720-439-4081</strong></a>
</div>
<div className="bbb-logo">
<a href="https://www.bbb.org/denver/business-reviews/locks-and-locksmiths/frontrange-services-llc-in-denver-co-90229254#sealclick" target="_blank"><img src="images/bbb-no-logo.png" alt="BBB NO Logo"/></a>
</div>
<div className="menu-hamburger">
<a href="#" id="nav-icon3">
<span></span>
<span></span>
<span></span>
</a>
</div>
</div>
<div className="clear"></div>
</div>
</header>

  );
}

export default TopNav;

import "../App.css";
import PhoneCall from "../components/btns/PhoneCall";
import Socialbtn from "../components/btns/Socialbtn";
import Logo from "../components/logo/Logo";
import "../css/nav.css";
import NavLinks from "./NavLinks";
import PhoneNav from "./PhoneNav";

function Nav() {
  return (
    <div className="  NavBar  ">
      <div className="flexRow bet containerL topNav">
        <Logo/>
 <div className="flexRow center h100">
 <PhoneNav/>
     <div className="displayNone">
     <Socialbtn/>  
      <PhoneCall/>
     </div>
      

       
       
        </div>

      </div>
      
 
    <div className="displayNone">
    <NavLinks/>
    </div>

 
   
     
    </div>
  );
}

export default Nav;

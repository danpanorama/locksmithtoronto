import { useState } from "react";
import "../App.css";
import "../css/nav.css";
import { NavLink } from "react-router-dom";


function PhoneNav() {
    const [OpenNav,setNavState] = useState(false);

    function openNav(){
        setNavState(!OpenNav)
    }

  return (
    <div className="phoneNav  displayPhone  flexCol center ">
        <span className=" navSumble" onClick={openNav} >==</span>
  <div className={OpenNav?"openNavActive  ":'closeNavActive'}>
    <ul onClick={openNav} className="phoneLinks flexCol center w100 posAbsolut">
    <NavLink to={'/'} className={'liLinks'} >HOME</NavLink>
    <NavLink to={'/about'} className={'liLinks'} >ABOUT</NavLink>
    <NavLink to={'/contact'} className={'liLinks'} >CONTACT</NavLink>
    <NavLink to={'/'} className={'liLinks'} >HOME</NavLink>
    <NavLink to={'/'} className={'liLinks'} >HOME</NavLink>
    <NavLink to={'/'} className={'liLinks'} >HOME</NavLink>
    <NavLink to={'/'} className={'liLinks'} >HOME</NavLink>

    </ul>




  </div>
   
       
 
     
   
     
    </div>
  );
}

export default PhoneNav;

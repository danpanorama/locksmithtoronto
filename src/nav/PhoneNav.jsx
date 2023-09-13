import { useState } from "react";
import "../App.css";
import "../css/nav.css";
import { NavLink } from "react-router-dom";
import Socialbtn from "../components/btns/Socialbtn";


function PhoneNav() {
    const [OpenNav,setNavState] = useState(false);

    function openNav(){
        setNavState(!OpenNav)
    }

  return (
    <div className="  flexCol end displayPhone">
     
      <div className="phoneNav     ">
         <div className=" navSumble flexCol bet" onClick={openNav} >
          <div className="navSumblediv"></div>
         <div className="navSumblediv"></div>
         <div className="navSumblediv"></div></div>
        <div className={OpenNav?"openNavActive  ":'closeNavActive'}>
        <span className="  flexCol center exit" onClick={openNav} >+</span>
          <ul onClick={openNav} className="phoneLinks flexCol center  w100 posAbsolut">
          <NavLink to={'/'} className={'liLinks'} >HOME</NavLink>
          <NavLink to={'/service'} className={'liLinks'} >SERVICES</NavLink>
          <NavLink to={'/about'} className={'liLinks'} >ABOUT</NavLink>
          <NavLink to={'/contact'} className={'liLinks'} >CONTACT</NavLink>
          <NavLink to={'/service'} className={'liLinks'} >SERVICES AREA</NavLink>
          {/* <NavLink to={'/blog'} className={'liLinks'} >BLOG</NavLink>
          <NavLink to={'/'} className={'liLinks'} >HOME</NavLink>
          <NavLink to={'/'} className={'liLinks'} >HOME</NavLink> */}
      
          </ul>
      
      
      <Socialbtn/>
      
        </div>
         
             
       
           
         
           
          </div>
    </div>
  );
}

export default PhoneNav;

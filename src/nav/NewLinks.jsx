import { NavLink } from "react-router-dom";
import "../App.css";
import "../css/nav.css";
import { useState } from "react";

function NewLinks() {
  const [activeLink,setActiveLink] = useState(false)
  return (
    <div className="   marginLeft50 h100 linksNav displayNone">
        <div className="   flexRow height100 center  ">
            <NavLink to={'/'} className={'link1'} >HOME</NavLink>
          
            <NavLink className={'link1 serviceLink'} to={'/service'} >SERVICES</NavLink>
                 <div className={'ServiceLinks flexCol  bcYellow '}>
                <NavLink className={'link12'} to={'/service'} >SERVICES</NavLink>
                <NavLink className={'link12'} to={'/service'} >SERVICES</NavLink>
                <NavLink className={'link12'} to={'/service'} >SERVICES</NavLink>
                <NavLink className={'link12'} to={'/service'} >SERVICES</NavLink>
                <NavLink className={'link12'} to={'/service'} >SERVICES</NavLink>
                <NavLink className={'link12'} to={'/service'} >SERVICES</NavLink>

                </div>
            
            <NavLink to={'/about'} className={'link1'} >ABOUT</NavLink>
            <NavLink className={'link1'} >BLOG</NavLink>
            <NavLink to={'/contact'} className={'link1'} >CONTACT</NavLink>
            <NavLink to={'/service'} className={'link1'} >SERVICE AREAS</NavLink>
           

        </div>

      
    </div>
  );
}

export default NewLinks;

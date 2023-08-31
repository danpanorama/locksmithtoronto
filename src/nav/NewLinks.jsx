import { NavLink } from "react-router-dom";
import "../App.css";
import "../css/nav.css";

function NewLinks() {
  return (
    <div className="   marginLeft50 h100 linksNav displayNone">
        <div className=" containerL  flexRow height100 center  ">
            <NavLink to={'/'} className={'link1'} >HOME</NavLink>
            <NavLink className={'link1'} >SERVICES</NavLink>
            <NavLink className={'link1'} >PRICES</NavLink>
            <NavLink to={'/about'} className={'link1'} >ABOUT</NavLink>
            <NavLink className={'link1'} >BLOG</NavLink>
            <NavLink to={'/contact'} className={'link1'} >CONTACT</NavLink>
            <NavLink className={'link1'} >SERVICE AREAS</NavLink>
           

        </div>

      
    </div>
  );
}

export default NewLinks;

import { NavLink } from "react-router-dom";
import "../App.css";
import "../css/nav.css";

function NavLinks() {
  return (
    <div className="navLinks flexCol center bcOrange">
        <div className="LinksList containerL h100 flexRow ">
            <NavLink to={'/'} className={'link'} >HOME</NavLink>
            <NavLink className={'link'} >SERVICES</NavLink>
            <NavLink className={'link'} >PRICES</NavLink>
            <NavLink to={'/about'} className={'link'} >ABOUT</NavLink>
            <NavLink className={'link'} >BLOG</NavLink>
            <NavLink to={'/contact'} className={'link'} >CONTACT</NavLink>
            <NavLink className={'link'} >SERVICE AREAS</NavLink>
           

        </div>

      
    </div>
  );
}

export default NavLinks;

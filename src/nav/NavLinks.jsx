import { Link, NavLink } from "react-router-dom";
import "../App.css";
import "../css/nav.css";

function NavLinks() {
  return (
    <div className="navLinks flexCol center bcOrange">
        <div className="LinksList containerL h100 flexRow ">
            <NavLink to={'/'} className={'link'} >HOME</NavLink>
<div className="hoverLinks">
<NavLink to={'/service'} className={'link serviceLink'} >SERVICES</NavLink>
<div className="ListOfLinks flexCol ">
<Link to={'/servicepage'} state={{
  header:'Locked Keys in Car in Denver, CO',
  headerBlue:'Car Opening Service in Denver',textHeader:"Did you lock your key in your car in Denver or the surrounding area? You came to the right place. We will get you back in in no time. We offer car opening emergency service 24 hours a day 7 days a week. All of our locksmiths are highly trained professionals with years of experience opening cars. If your keys are locked in the trunk and the trunk release button doesn't work, we can still unlock it with our tools, damage free."}
  } className={'link1'} >CAR LOCKOUT</Link>
<Link to={'/servicepage'} 
state={{header:'Locked Out of House in Denver, CO',
headerBlue:'Locked Out of House in Denver'}}  className={'link1'} >HOUSE LOCKOUT</Link>
<Link to={'/servicepage'} state={{header:'1'}}  className={'link1'} >BUSINESS LOCKOUT</Link>
<Link to={'/servicepage'} state={{header:'1'}}  className={'link1'} >LOCK CHANGE SERVICE</Link>
<Link to={'/servicepage'} state={{header:'1'}}  className={'link1'} >LOCK REKEY SERVICE</Link>
<Link to={'/servicepage'} state={{header:'1'}}  className={'link1'} >ALL LOCKS REPLAIS  </Link>
<Link to={'/servicepage'} state={{header:'1'}}  className={'link1'} >FRESH INSTALL    </Link>

<Link to={'/servicepage'} state={{header:'1'}}  className={'link1'} >MORE SERVICES</Link>

</div>
</div>


            {/* <NavLink className={'link'} >PRICES</NavLink> */}
            <NavLink to={'/about'} className={'link'} >ABOUT</NavLink>
            {/* <NavLink className={'link'} >BLOG</NavLink> */}
            <NavLink to={'/contact'} className={'link'} >CONTACT</NavLink>
            <NavLink to={'/service'} className={'link'} >SERVICE AREAS</NavLink>
           

        </div>

      
    </div>
  );
}

export default NavLinks;

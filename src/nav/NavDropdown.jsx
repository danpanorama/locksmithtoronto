
import { Link, NavLink } from "react-router-dom";

import "../App.css";
import "../css/nav.css";


function NavDropdown() {
  return (
    <div className="hoverLinks">
    <NavLink to={'/service'} className={'link serviceLink'} >SERVICES</NavLink>
    <div className="ListOfLinks flexCol ">
    
    <Link to={'/servicepage'} state={{
      header:'Locked Keys in Car in toronto, ON',
      headerBlue:'Car Opening Service in toronto',
      textHeader:"Did you lock your key in your car in toronto or the surrounding area? You came to the right place. We will get you back in in no time. We offer car opening emergency service 24 hours a day 7 days a week. All of our locksmiths are highly trained professionals with years of experience opening cars. If your keys are locked in the trunk and the trunk release button doesn't work, we can still unlock it with our tools, damage free."}
      } className={'link1'} >CAR LOCKOUT</Link>
    
    
    <Link to={'/servicepage'} 
    state={{header:'Locked Out of House in toronto, ON',
    headerBlue:'Locked Out of House in toronto',
    textHeader:"Are you locked out of your house in toronto or the surrounding area? We can be there to unlock your door in 20 minutes or less, 24 hours a day, 7 days a week. Best Prices Guaranteed!",
    imageRow1:" https://www.frontrangelocksmith.com/images/denver-skyline.jpeg",
    
    headerRow2:'How soon can we be there?',
    textRow2:"20 minutes or less. During the day our locksmiths are scattered around toronto and the surrounding cities. When you need an emergency lockout service we send the closest locksmith to you, so you will wait the absolute minimum while we're rushing over to unlock you home. Over the years we gained the reputation of being one of the locksmith companies in toronto with the lowest arrival times.",
    image2:"https://www.frontrangelocksmith.com/images/keys-on-wood.jpeg",
    
    image3:'https://www.frontrangelocksmith.com/images/man-thumbnail-2.png',
    headerRow3:'Will the lock be damaged?',
    textRow3:"Most likely not. Our policy is to only drill the lock as a last resort. Our locksmiths will first try to pick the lock, and almost always succeed. Rarely we run into a stubborn lock that seems impossible to pick, only then, and with your approval, we would drill the lock. This is not common and only happens in about 5 percent of locks. In case we had to drill the lock we can offer you a new identical lock and won't charge you for labor and installation."
    ,
    image4:'https://www.frontrangelocksmith.com/images/picking-lock.jpeg',
    headerRow4:'Can we open any lock?',
    textRow4:"Yes. From basic door knobs and deadbolts to high security commercial locks or keypads, we can open any lock. There has never been a lock we weren't able to unlock."
    ,
    image5:'	https://www.frontrangelocksmith.com/images/looking-for-keys.jpeg',
    headerRow5:'How long does it take?',
    textRow5:"Usually less than 10 minutes. Naturally, the more secure the lock is the longer it may take."
    ,
    
    }}  className={'link1'} >HOUSE LOCKOUT</Link>
    
    <Link to={'/servicepage'} state={{header:'1'}}  className={'link1'} >BUSINESS LOCKOUT</Link>
    
    <Link to={'/servicepage'} state={{header:'1'}}  className={'link1'} >LOCK CHANGE SERVICE</Link>
    
    <Link to={'/servicepage'} state={{header:'1'}}  className={'link1'} >LOCK REKEY SERVICE</Link>
    
    <Link to={'/servicepage'} state={{header:'1'}}  className={'link1'} >ALL LOCKS REPLAIS  </Link>
    
    <Link to={'/servicepage'} state={{header:'1'}}  className={'link1'} >FRESH INSTALL    </Link>
    
    <Link to={'/servicepage'} state={{header:'1'}}  className={'link1'} >MORE SERVICES</Link>
    
    </div>
    </div>
    
  );
}

export default NavDropdown;


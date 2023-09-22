import "../../css/hometest.css";
import "../../css/home.css";
import { Link } from "react-router-dom";

function OpeningTest() {
  return (
    <div className="openImage flexCol acenter ">

     
      <div className="flexCol center  marginTop70 marginNonePhone containerL">
      <h1 className="headerH1 cw w80 marginBottom lineHeight">CHEETAH LOCKSMITH TORONTO</h1>
      <h3 className="smallHeader cw wraph1 marginBottom">
              Locksmith in toronto,ON Canada- 24/7   Service
            </h3>
<div className="flexRowToCol bet w100 marginTop25">


      <div className="sideB ">
            <h1 className="headerH1 callusy ">CALL US 24/7!</h1>
            <h3 className="smallHeader cw displayNone">
            Locked out of your car? Need your locks changed?
            </h3>
            <h3 className="smallHeader cw displayNone">
             Lost your house keys? 
            </h3>
            <div className="grinRow ButtonsCall">
                <button className="buttonNumber btn marginRight10">
                    1561-235-1653
                </button>
                <button className="buttonPhone bg btnPhoneMedia btn">
call
                </button>
            </div>
            <br />
            <span className="span cw w100 marginBottomPhone displayNone">Now receiving calls</span>
        </div>
       
       
       
        <div className="sideA flexCol center  ">
          <div className="header">

          
            {/* <h3 className="smallHeader cw  marginBottom">
          
            </h3> */}

            {/* the class was this one FourSquaresGrid */}
            <div className="FourSquaresGrid ">
              <div className="oneSquare wrapH1"> 
              
              
              <Link to={'/servicepage'} state={{
      header:'Locked Keys in Car in Toronto, ON',
      headerBlue:'Car Opening Service in Toronto',
      textHeader:"Did you lock your key in your car in Toronto or the surrounding area? You came to the right place. We will get you back in in no time. We offer car opening emergency service 24 hours a day 7 days a week. All of our locksmiths are highly trained professionals with years of experience opening cars. If your keys are locked in the trunk and the trunk release button doesn't work, we can still unlock it with our tools, damage free."
    , imageRow1:" https://www.frontrangelocksmith.com/images/denver-skyline.jpeg",
    
    headerRow2:'How soon can we be there?',
    textRow2:"20 minutes or less. During the day our locksmiths are scattered around Toronto and the surrounding cities. When you need an emergency lockout service we send the closest locksmith to you, so you will wait the absolute minimum while we're rushing over to unlock you home. Over the years we gained the reputation of being one of the locksmith companies in Toronto with the lowest arrival times.",
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
    
    }
     
     
     
     
     } className={'cw '} > LOCKED KEYS IN CAR?</Link>
              
              
              
              </div>



              <div className="oneSquare wrapH1">
                
                
                 
    <Link to={'/servicepage'} 
    state={{header:'Locked Out of House in Toronto, ON',
    headerBlue:'Locked Out of House in Toronto',
    textHeader:"Are you locked out of your house in Toronto or the surrounding area? We can be there to unlock your door in 20 minutes or less, 24 hours a day, 7 days a week. Best Prices Guaranteed!",
    imageRow1:" https://www.frontrangelocksmith.com/images/denver-skyline.jpeg",
    
    headerRow2:'How soon can we be there?',
    textRow2:"20 minutes or less. During the day our locksmiths are scattered around Toronto and the surrounding cities. When you need an emergency lockout service we send the closest locksmith to you, so you will wait the absolute minimum while we're rushing over to unlock you home. Over the years we gained the reputation of being one of the locksmith companies in Toronto with the lowest arrival times.",
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
    
    }}  className={'cw'} >LOCKED OUT OF HOUSE?</Link>
                
                </div>
                <div className="oneSquare wrapH1">FORGOT YOUR BUSINESS KEYS ?</div>
              <div className="oneSquare wrapH1"> EMERGENCY CALL</div>
              <div className="oneSquare wrapH1">NEED TO CHANGE LOCKS?</div>
              <div className="oneSquare wrapH1">MORE SERVICES</div>
            </div>
          </div>
        </div>



      </div>
      </div>
    </div>
  );
}

export default OpeningTest;

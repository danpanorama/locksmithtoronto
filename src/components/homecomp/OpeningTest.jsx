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
                <button className="buttonNumber displayNone btn marginRight10">
                647-254-4341
                </button>
                <button className="buttonPhone bg btnPhoneMedia phonBtn btn">
<a className="cw" href="tel:6472544341">CALL</a>
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
    , imageRow1:" ",
    
    headerRow2:'How soon can we be there?',
    textRow2:"20 minutes or less. During the day our locksmiths are scattered around Toronto and the surrounding cities. When you need an emergency lockout service we send the closest locksmith to you, so you will wait the absolute minimum while we're rushing over to unlock you home. Over the years we gained the reputation of being one of the locksmith companies in Toronto with the lowest arrival times.",
    image2:"1",
    
    image3:'',
    headerRow3:'Will the lock be damaged?',
    textRow3:"Most likely not. Our policy is to only drill the lock as a last resort. Our locksmiths will first try to pick the lock, and almost always succeed. Rarely we run into a stubborn lock that seems impossible to pick, only then, and with your approval, we would drill the lock. This is not common and only happens in about 5 percent of locks. In case we had to drill the lock we can offer you a new identical lock and won't charge you for labor and installation."
    ,
    image4:'',
    headerRow4:'Can we open any lock?',
    textRow4:"Yes. From basic door knobs and deadbolts to high security commercial locks or keypads, we can open any lock. There has never been a lock we weren't able to unlock."
    ,
    image5:'',
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
    imageRow1:" ",
    
    headerRow2:'How soon can we be there?',
    textRow2:"20 minutes or less. During the day our locksmiths are scattered around Toronto and the surrounding cities. When you need an emergency lockout service we send the closest locksmith to you, so you will wait the absolute minimum while we're rushing over to unlock you home. Over the years we gained the reputation of being one of the locksmith companies in Toronto with the lowest arrival times.",
    image2:"1",
    
    image3:'',
    headerRow3:'Will the lock be damaged?',
    textRow3:"Most likely not. Our policy is to only drill the lock as a last resort. Our locksmiths will first try to pick the lock, and almost always succeed. Rarely we run into a stubborn lock that seems impossible to pick, only then, and with your approval, we would drill the lock. This is not common and only happens in about 5 percent of locks. In case we had to drill the lock we can offer you a new identical lock and won't charge you for labor and installation."
    ,
    image4:'',
    headerRow4:'Can we open any lock?',
    textRow4:"Yes. From basic door knobs and deadbolts to high security commercial locks or keypads, we can open any lock. There has never been a lock we weren't able to unlock."
    ,
    image5:'',
    headerRow5:'How long does it take?',
    textRow5:"Usually less than 10 minutes. Naturally, the more secure the lock is the longer it may take."
    ,
    
    }}  className={'cw'} >LOCKED OUT OF HOUSE?</Link>
                
                </div>
                <div className="oneSquare wrapH1">

                  <Link to={'/servicepage'}
                     state={{
                      header: "Locked Out of House in toronto, ON",
                      headerBlue: "Locked Out of House in toronto",
                      textHeader:
                        "Are you locked out of your house in Toronto or the surrounding area? We can be there to unlock your door in 20 minutes or less, 24 hours a day, 7 days a week. Best Prices Guaranteed!",
                      imageRow1:
                        "",
          
                      headerRow2: "How soon can we be there?",
                      textRow2:
                        "20 minutes or less. During the day our locksmiths are scattered around Toronto and the surrounding cities. When you need an emergency lockout service we send the closest locksmith to you, so you will wait the absolute minimum while we're rushing over to unlock you home. Over the years we gained the reputation of being one of the locksmith companies in Toronto with the lowest arrival times.",
                      image2:
                       "1",
          
                      image3:
                        "",
                      headerRow3: "Will the lock be damaged?",
                      textRow3:
                        "Most likely not. Our policy is to only drill the lock as a last resort. Our locksmiths will first try to pick the lock, and almost always succeed. Rarely we run into a stubborn lock that seems impossible to pick, only then, and with your approval, we would drill the lock. This is not common and only happens in about 5 percent of locks. In case we had to drill the lock we can offer you a new identical lock and won't charge you for labor and installation.",
                      image4:
                        "",
                      headerRow4: "Can we open any lock?",
                      textRow4:
                        "Yes. From basic door knobs and deadbolts to high security commercial locks or keypads, we can open any lock. There has never been a lock we weren't able to unlock.",
                      image5:
                        "https://www.frontrangelocksmith.com/images/looking-for-keys.jpeg",
                      headerRow5: "How long does it take?",
                      textRow5:
                        "Usually less than 10 minutes. Naturally, the more secure the lock is the longer it may take.",
                      image6:
                        "	https://www.frontrangelocksmith.com/images/smiling-man-thumbs-up.png",
                      headerRow6:
                        "Why should you choose Cheetah Locksmith as your emergency locksmith?",
                      textRow6:
                        "bulletWe price match to ensure you will always get the lowest price with us bulletFastest response times of 20 minutes or less bulletWe offer emergency locksmith services 24/7 all over Toronto and Ontario bulletHighly trained professional who can open any door in minutes",
                    }}className={'cw '}
                  >
FORGOT YOUR BUSINESS KEYS ?
                  </Link>
                  
                  
                  </div>
              <div className="oneSquare wrapH1"> 
              <Link to={'/servicepage'}  state={{
            header: "Lock Replacement Service in Toronto, ON",
            headerBlue: "Lock Change Service in Toronto",
            textHeader:
              "Moved into a new home in Toronto or the surrounding area? Lost your house key? Is one of your locks not working properly or maybe your locks are simply getting old and you want a change. Cheetah Locksmith offers a wide variety of lock changing services throughout the Toronto ON, including Aurora, Lakewood, Highlands Range, Littleton and more! We are also the only company in Toronto that offers a 24 hour emergency lock replacement service.",

            headerRow1: "Why do you want to get your locks changed?",
            textRow1:
              "Before we change your locks, it’s important for us to know why you want to change them. People often think that their locks need to be replaced when actually there are better and cheaper solutions to the problem: bulletWere your keys lost or stolen? Do you want an old key to not work anymore? We can re-key your existing locks for a fraction of the price AND you can keep the same hardware! bulletIs there a problem with the lock? Maybe we can fix it! bulletAre your locks getting old? We can change the old locks with new identical ones or you can take the opportunity and upgrade to high security locks, electronic keypad or even a smart lock (highly recommended!)",
            image1:
              "https://www.frontrangelocksmith.com/images/lock-change-thumbnail.png",

            image2:
            "https://www.frontrangelocksmith.com/images/change-lock-thumbnail.png",
            headerRow2: "Which locks can we change?",
            textRow2:
              "In all of our years in business there has never been a lock we weren’t able to replace. From unique sliding door locks to commercial push bars, old rare mechanisms and uncommon designs and finishes, we can always find either an identical lock to the one you currently have or a similar one. If the lock you are looking for is made by a brand we don’t carry in stock – we will order it from one of our suppliers and come back to install it while assuring your home or business stays secured while we do.",
            image3:
              "",
            headerRow3: "The lock replacement process",
            textRow3:
              "One of our professional locksmiths will arrive at your home or office at the time requested. (or within 30 minutes if you need the service immediately) bulletThe locksmith will inspect your locks and inform you about the different options so you can choose together which solution best matches your needs and budget. bulletAfter you choose the brand, style and security grading of your locks, the locksmith will install them. bullet2 keys are included for each lock installed. If you need more copies, let the locksmith know and he will provide you with as many copies as you need for an extra charge.",
            image4:
              "https://res.cloudinary.com/dt0sbcfc6/image/upload/v1572202534/denver/lock-change-thumbnail-2.jpg",
            headerRow4: "Commercial Lock Change in Toronto",
            textRow4:
              "At Cheetah  Locksmith we specialize in commercial work. Our locksmiths have decades of combined experience changing all types of locks for businesses. We can change and repair a wide range of commercial locks and mechanisms such as push bars, Interchangeable core systems, mortise cylinders and Detex locking devices. Keep in mind that it’s quite rare that a commercial or a heavy duty mechanism needs to be replaced. Almost always it can be fixed by just replacing a part in it. Before changing any non-working mechanism, we will always offer to try and fix it first and only replace it as a last resort. Whether we change or repair it – our 6 months labor warranty has you covered in case something goes wrong.",
            image5:
              "https://www.frontrangelocksmith.com/images/lock-change-thumbnail-3.png",
            headerRow5: "Price",
            textRow5:
              "When it comes to changing your locks, our service is tailored around your needs and budget. Since there are many parameters that go into lock replacement service, such as whether we change the locks, repair or rekey them, as well as the type and brand of the new locks you choose, it’s hard to predict the exact price. That’s why we offer free estimates on all of our lock replacement services - residential and commercial. The locksmith will never do any work before you were informed about the total price and approved it. We are always transparent about our prices!",
            image6:
              "https://www.frontrangelocksmith.com/images/lock-change-thumbnail-3.png",
            headerRow6: "Price",
            textRow6:
              "When it comes to changing your locks, our service is tailored around your needs and budget. Since there are many parameters that go into lock replacement service, such as whether we change the locks, repair or rekey them, as well as the type and brand of the new locks you choose, it’s hard to predict the exact price. That’s why we offer free estimates on all of our lock replacement services - residential and commercial. The locksmith will never do any work before you were informed about the total price and approved it. We are always transparent about our prices!",
          }}className={'cw '} >
              EMERGENCY CALL
              </Link>
              
              </div>
              <div className="oneSquare wrapH1">
                <Link   to={"/servicepage"}className={'cw '}
          state={{
            header: "Rekey Locks in Toronto, ON",
            headerBlue: "Lock Rekey Service in Toronto",
            textHeader:
              "If you lost your house keys or moved into a new home and want to make sure no one else has the key, you probably want to get your locks rekeyed. According to statistics from the Toronto police department, 49 percent of the burglaries in Toronto in the past 12 months were done without forced entry, meaning that the burglar used the key. At Cheetah  Locksmith we offer a quick, professional and cheap lock rekey service. With same day appointments at no additional charge and 24/7 emergency rekey service all across Toronto and the surrounding cities, there's no reason to look any further.",

            image1:
              "https://www.frontrangelocksmith.com/images/rekeyed-kwikset.jpeg",

            image2:
             "https://www.frontrangelocksmith.com/images/rekey-pinning-kit.jpeg",
            headerRow2: "The Rekeying process",
            textRow2:
              "Once you set up an appointment to get your locks rekeyed, one of our locksmiths will arrive at the time scheduled. You will walk him through all the locks your want to rekey. If you want to match specific locks to work on the same key and other locks on a different key we can do that as well. The locksmith will then take the locks to his van and rekey them according to the setup you decided on, using only brand new original keys. And then install them back on your doors and hand you the keys. It's really that simple. Rekeying a whole house rarely takes more than an hour.",
            image3:
              "",
            headerRow3: "Rekey Schlage Locks",
            textRow3:
              "Schlage is one of the 2 biggest manufacturers of residential locks in the US. It is considered to be the slightly higher quality brand and therefore its hardware is a bit more expensive. Having said that, the cost for rekeying a Schalge lock is not higher since the pins used for the rekeying process are the same across all brands. At Cheetah  Locksmith we rekey hundreds of Schlage locks in Toronto every week so if you need to rekey Schalge locks or even if you just have a question, don't hesitate to call us.",
            image4:
              "https://www.frontrangelocksmith.com/images/kwikset-lock-rekey.jpeg",
            headerRow4: "Rekey Kwikset Locks",
            textRow4:
              "Kwikset is the other biggest manufacturer of residential locks and as a matter of fact, it's the biggest one of the two when it comes to residential locks. If you want to read about the differences between the 2 brands, we wrote an excellent comparison on the topic, so make sure to check it out. If you need to rekey your kwikset locks, give us a call and we would be happy to help. We offer 24/7 rekey service at no additional cost for after hours service.",
            image5:
              "https://www.frontrangelocksmith.com/images/lock-rekeyed.jpeg",
            headerRow5: "Does Home Depot rekey locks in Toronto?",
            textRow5:
              "This is a question we run into often. Home Depot does rekey locks, but only upon purchase at one of their stores. It's actually a great solution if you've just purchased brand new locks from them and want the locks to match an existing set you have at home or to match them with another set you purchased. However, they do not offer a free mobile locksmith service, so if the locks are already installed your best option would be to call Cheetah Locksmith.",
            image6:
              "https://www.frontrangelocksmith.com/images/smiling-man-thumbs-up.png",
            headerRow6:
              "Why Choose Cheetah Locksmith to rekey your home or business?",
            textRow6:
              "bulletHigh quality work done by professionals with years of experience rekeying locks just like yours. bulletWe come to you, anytime, anywhere. 24 hours a day 7 days a week, including all holidays. bulletExact quotes before we start working, no trip charge if you don't want the service. bulletOur locksmiths are licensed and bonded and they all go through rigorous screening and background checks.",
          }}>
                NEED TO CHANGE LOCKS?
                </Link>
                </div>
              <div className="oneSquare wrapH1">
                <Link className={'cw '} to={'service'}>MORE SERVICES
                </Link>
                </div>
            </div>
          </div>
        </div>



      </div>
      </div>
    </div>
  );
}

export default OpeningTest;

import { Link, NavLink } from "react-router-dom";

import "../App.css";
import "../css/nav.css";
import Lock1 from '../images/lock1.jpeg'
import Lock2 from '../images/lock2.jpeg'
import Lock3 from '../images/lock3.jpeg'
import Lock4 from '../images/lock4.jpeg'
import Lock5 from '../images/lock5.jpeg'
import Lock6 from '../images/lock6.jpeg'


function NavDropdown() {
  return (
    <div className="hoverLinks">
      <NavLink to={"/service"} className={"link serviceLink"}>
        SERVICES
      </NavLink>
      <div className="ListOfLinks flexCol ">
        <Link
          to={"/servicepage"}
          state={{
            header: "Locked Keys in Car in toronto, ON",
            headerBlue: "Car Opening Service in toronto",
            textHeader:
              "Did you lock your key in your car in toronto or the surrounding area? You came to the right place. We will get you back in in no time. We offer car opening emergency service 24 hours a day 7 days a week. All of our locksmiths are highly trained professionals with years of experience opening cars. If your keys are locked in the trunk and the trunk release button doesn't work, we can still unlock it with our tools, damage free.",

            imageRow1:
              "",

            headerRow2: "How soon can we be there?",
            textRow2:
              "23 minutes is the average time it take us to arrive to any point in the Toronto ON. That includes the surrounding cities as well. Keep in mind that this is only an average, we are limited by traffic and road conditions. We will always dispatch the closest locksmith to you immediately to make sure you wait as little as possible. If you're in the capitol hill or downtown area, it will usually take us less than 15 minutes to arrive.",
            image2:
              "https://www.frontrangelocksmith.com/images/parked-car.jpeg",

            image3:
              "",
            headerRow3: "Will the car be damaged?",
            textRow3:
              "No. We guarantee that there won't be any damage to your car, not even the slightest. Our locksmiths are extremely experienced in car opening and they use high quality, professional car opening tools which eliminates the risk of damage. We've unlocked thousands of car and never left any damage whatsoever. If we would, of course you will be compensated.",
            image4:
              "https://www.frontrangelocksmith.com/images/open-car-door.jpeg",
            headerRow4: "Can we open any car?",
            textRow4:
              "Yes. We unlock 100% of the cars. Doesn't matter which year, make or model, we can unlock it. Even if the keys are in the trunk and the trunk release doesn't work.",
            image5:
             Lock1,
            headerRow5: "Will your insurance cover it?",
            textRow5:
              "It depends. Some insurances also cover road side assistance and locksmith services. Often we find that the insurance does cover the service and the customer didn't know about it, so we always advise that you check. In case your insurance covers the service, we will work with your insurance company to make sure you get reimbursed as soon as possible.",
            image6:
              "https://www.frontrangelocksmith.com/images/smiling-man-thumbs-up.png",
            headerRow6: "How long does it take to unlock your car?",
            textRow6:
              "Usually not more than a few minutes. Some cars are more complicated to unlock and can take up to 15 minutes, but it's not common.",
          }}
          className={"link1"}
        >
          CAR LOCKOUT
        </Link>

        <Link
          to={"/servicepage"}
          state={{
            header: "Locked Out of House in toronto, ON",
            headerBlue: "Locked Out of House in toronto",
            textHeader:
              "Are you locked out of your house in toronto or the surrounding area? We can be there to unlock your door in 20 minutes or less, 24 hours a day, 7 days a week. Best Prices Guaranteed!",
            imageRow1:
              "",

            headerRow2: "How soon can we be there?",
            textRow2:
              "20 minutes or less. During the day our locksmiths are scattered around toronto and the surrounding cities. When you need an emergency lockout service we send the closest locksmith to you, so you will wait the absolute minimum while we're rushing over to unlock you home. Over the years we gained the reputation of being one of the locksmith companies in toronto with the lowest arrival times.",
            image2:
              Lock2,

            image3:
              "",
            headerRow3: "Will the lock be damaged?",
            textRow3:
              "Most likely not. Our policy is to only drill the lock as a last resort. Our locksmiths will first try to pick the lock, and almost always succeed. Rarely we run into a stubborn lock that seems impossible to pick, only then, and with your approval, we would drill the lock. This is not common and only happens in about 5 percent of locks. In case we had to drill the lock we can offer you a new identical lock and won't charge you for labor and installation.",
            image4:
              Lock3,
            headerRow4: "Can we open any lock?",
            textRow4:
              "Yes. From basic door knobs and deadbolts to high security commercial locks or keypads, we can open any lock. There has never been a lock we weren't able to unlock.",
            image5:
             Lock5,
            headerRow5: "How long does it take?",
            textRow5:
              "Usually less than 10 minutes. Naturally, the more secure the lock is the longer it may take.",
          }}
          className={"link1"}
        >
          HOUSE LOCKOUT
        </Link>

        <Link
          to={"/servicepage"}
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
              "https://www.frontrangelocksmith.com/images/keys-on-wood.jpeg",

            image3:
              "",
            headerRow3: "Will the lock be damaged?",
            textRow3:
              "Most likely not. Our policy is to only drill the lock as a last resort. Our locksmiths will first try to pick the lock, and almost always succeed. Rarely we run into a stubborn lock that seems impossible to pick, only then, and with your approval, we would drill the lock. This is not common and only happens in about 5 percent of locks. In case we had to drill the lock we can offer you a new identical lock and won't charge you for labor and installation.",
            image4:
              "https://www.frontrangelocksmith.com/images/picking-lock.jpeg",
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
          }}
          className={"link1"}
        >
          BUSINESS LOCKOUT
        </Link>

        <Link
          to={"/servicepage"}
          state={{
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
              "https://www.frontrangelocksmith.com/images/picking-lock.jpeg",
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
          }}
          className={"link1"}
        >
          LOCK CHANGE SERVICE
        </Link>

        <Link
          to={"/servicepage"}
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
          }}
          className={"link1"}
        >
          LOCK REKEY SERVICE
        </Link>

        <Link to={"/servicepage"} state={{ header: "1" }} className={"link1"}>
          ALL LOCKS REPLAIS{" "}
        </Link>

        <Link to={"/servicepage"} state={{ header: "1" }} className={"link1"}>
          FRESH INSTALL{" "}
        </Link>

        <Link to={"/service"} state={{ header: "1" }} className={"link1"}>
          MORE SERVICES
        </Link>
      </div>
    </div>
  );
}

export default NavDropdown;

import '../../css/home.css';
import OneBanner from './OneBanner';

function DetailsBanner() {
  return (
    <div className="detail flexCol center">

   
    <div className="bannerAbout gridAbout detailsBannerSec w90">
        <OneBanner 
        img={'https://res.cloudinary.com/dt0sbcfc6/image/upload/f_auto,q_auto/denver/time-icon.png'} 
        header={'20 MINUTES HELP!'}
        text={"20 minutes is the most you'll wait"}
        />
        <OneBanner 
        img={'https://res.cloudinary.com/dt0sbcfc6/image/upload/f_auto,q_auto/denver/metro-area-icon.png'} 
        header={'DENVER-METRO AREA'}
        text={"We work all over the Denver-metro area"}
        />
         <OneBanner 
        img={'	https://res.cloudinary.com/dt0sbcfc6/image/upload/f_auto,q_auto/denver/availablity-icon.png'} 
        header={'AVAILABLE 24/7'}
        text={"All of our services are 24 hours a day, 7 days a week"}
        />
        <OneBanner 
        img={'https://res.cloudinary.com/dt0sbcfc6/image/upload/f_auto,q_auto/denver/card-icon.png'} 
        header={'PAY WITH CREDIT CARD'}
        text={"We accept all credit and debit cards"}
        />
        <OneBanner 
        img={'https://res.cloudinary.com/dt0sbcfc6/image/upload/f_auto,q_auto/denver/badge-icon.png'} 
        header={'TRUSTED COMPANY'}
        text={"Licensed and certified"}
        />
     
    </div> 
    </div>
  );
}

export default DetailsBanner;

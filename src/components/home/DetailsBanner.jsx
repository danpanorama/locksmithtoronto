import '../../css/home.css';
import OneBanner from './OneBanner';

function DetailsBanner() {
  return (
    <div className="detail flexCol center">

   
    <div className="bannerAbout gridAbout detailsBannerSec ">
        <OneBanner 
        img={'3'} 
        header={'25 MINUTES HELP!'}
        text={"25 minutes is the most you'll wait"}
        />
        <OneBanner 
        img={'2'} 
        header={'DENVER-METRO AREA'}
        text={"We work all over the Denver-metro area"}
        />
         <OneBanner 
        img={'6'} 
        header={'AVAILABLE 24/7'}
        text={"All of our services are 24 hours a day, 7 days a week"}
        />
        <OneBanner 
        img={'4'} 
        header={'PAY WITH CREDIT CARD'}
        text={"We accept all credit and debit cards"}
        />
        <OneBanner 
        img={'5'} 
        header={'TRUSTED COMPANY'}
        text={"Licensed and certified"}
        />
     
    </div> 
    </div>
  );
}

export default DetailsBanner;

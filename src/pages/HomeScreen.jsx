import { useEffect } from 'react';
import '../App.css';
import Opening from '../components/homecomp/Opening';
import DetailsBanner from '../components/home/DetailsBanner';
import ButtonsSec from '../components/btns/ButtonsSec';
import DetailFirst from '../components/details/DetailFirst';
import DetailRow from '../components/details/DetailRow';
import VisitBlog from '../components/blog/VisitBlog';
import SocialWithUs from '../components/btns/SocialWithUs';
import OpeningTest from '../components/homecomp/OpeningTest';

function HomeScreen() {
  useEffect(()=>{
    window.scrollTo(0,0)
      },[])
  return (
    <div className="">
      <OpeningTest/>
     <div className="containerL flexCol center">
     
      <DetailsBanner/>
     
      <ButtonsSec/>
      <DetailFirst/>
      <DetailRow class={'reverse'} Header={"Forgot your keys inside your home or flat? Don't Worry!"} Span={'At Cheetah Locksmith Denver we can unlock any lock in a non destructive way, ensuring you will get back in quickly with no damage to the door.'} active={true} pText={"We can help you get back in without breaking your lock at Front Range Locksmith Denver. Our skilled locksmiths at Front Range Locksmith are masters of lock-picking and can open almost any lock in no time. Picking a lock does not harm it, so you can keep using the same lock after we let you in. In some cases, when the lock is very difficult to pick, we may need to drill it. Drilling a lock will not damage your door, but it will make the lock useless. If we had to drill your lock we will always be able to install a new one for you."} image={'https://res.cloudinary.com/dt0sbcfc6/image/upload/v1572202830/denver/picking-lock.jpg'} />

<DetailRow 
Header={"Looking to Replace or Rekey Your Locks? We've Got You Covered."} 
Span={"Our extensive experience extends to a wide range of commercial projects."} 
active={false} 

pText={"solution that suits both your security requirements and budget.From moderate security locks to high-security options and keyless entry systems, we've got the right match for you. If all you need is a rekeying service, we'll efficiently switch your old key to a new one while retaining your existing hardware. Plus, we offer same-day rekeying at no extra charge, and each lock change or rekeying comes with two complimentary keys. If you require extra copies, just let us know, and we'll be happy to make them on the spot"} 
image={'	https://res.cloudinary.com/dt0sbcfc6/image/upload/v1572202534/denver/lock-change-thumbnail-2.jpg'} />
  

  <DetailRow 
Header={'Commercial work? You came to the right place.'} 
Span={'We have vast experience with any type of commercial work you may need. With literally thousands of stores, restaurants, apartment complexes and factories we worked with (and still do), we are proficient doing any sort of commercial work.'} 
active={true} class={'reverse'}
pText={"  Having partnered with numerous businesses, including retail stores, restaurants, apartment complexes, and factories—both past and present—we excel in various aspects of commercial work.From implementing complex multilevel master key systems to installing and repairing panic bars, detex exit alarms, and commercial-grade locks, we offer a comprehensive array of services to meet your business needs. Moreover, our commitment extends beyond installation; we also provide ongoing maintenance and repair services, ensuring you always have a reliable point of contact in case of any issues"} 
image={'https://res.cloudinary.com/dt0sbcfc6/image/upload/v1571928863/denver/commercial-locks.jpg'} />
  
<br /><br /><br />
     <ButtonsSec/>

     
  <VisitBlog/>
  <br /><br /><br />

  <SocialWithUs/>
     </div>
   
      
    </div>
  );
}

export default HomeScreen;

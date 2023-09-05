import { useEffect } from 'react';
import '../App.css';
import AboutComp from '../components/pagesComp/AboutComp';
import Service from '../components/servicespages/Service';

function ServiceScreen() {
  useEffect(()=>{
    window.scrollTo(0,0)
      },[])
  return (
    <div className="about ">
     
   <Service/>
     
    </div>
  );
}

export default ServiceScreen;

import { useEffect } from 'react';
import '../App.css';
import '../css/nav.css';

import AboutComp from '../components/pagesComp/AboutComp';
import Service from '../components/servicespages/Service';
import { useLocation} from "react-router-dom"
import HeaderPage from '../components/pagesComp/HeaderDitails';
import NavPages from '../components/pagesComp/NavPages';
import HeaderDitails from '../components/pagesComp/HeaderDitails';
import ImageWithText from '../components/pagesComp/ImageWithText';

function ServiceDinamic(props) {
    let location = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0)
      },[])
      useEffect(()=>{
if(props.state == '1'){
    console.log('1')
}
console.log(location.state)
      },[])
  return (
    <div className=" ">
       <NavPages header={location.state.header} class={'imageAbout'} />

    <div className="containerL">
        <HeaderDitails header={location.state.headerBlue}/>
    
    </div>
    <ImageWithText text={location.state.textHeader} />

    
     
    </div>
  );
}

export default ServiceDinamic;

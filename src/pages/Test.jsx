import { useEffect } from 'react';
import '../App.css';
import AboutComp from '../components/pagesComp/AboutComp';

function Test() {
  useEffect(()=>{
window.scrollTo(0,0)
  },[])
  return (
    <div className="about ">
     
     
    </div>
  );
}

export default Test;

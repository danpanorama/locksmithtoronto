import { useEffect } from 'react';
import '../App.css';
import Opening from '../components/homecomp/Opening';

function HomeScreen() {
  useEffect(()=>{
    window.scrollTo(0,0)
      },[])
  return (
    <div className="">
      <Opening/>
      
    </div>
  );
}

export default HomeScreen;

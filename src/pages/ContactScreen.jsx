import { useEffect } from 'react';
import '../App.css';
import ContactComp from '../components/pagesComp/ContactComp';

function ContactScreen() {
  useEffect(()=>{
    window.scrollTo(0,0)
      },[])
  return (
    <div className="about marginBottom50">
     
      <ContactComp/>
     
    </div>
  );
}

export default ContactScreen;

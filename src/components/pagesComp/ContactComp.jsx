import '../../App.css';
import '../../css/contact.css';
import Logo from '../logo/Logo';

import NavPages from './NavPages';


function ContactComp() {
  return (
    <div className="">
       <NavPages header={"CONTACT"} class='imgContact' />
       <div className="containerL">
   <h1 className="headerContact">
   If there's anything you want to know or you need our help, leave us a message and we'll get back to you right away
   </h1>
   <div className="flexRow marginTop50 bet">
        <div className="DetailsContact">
          <h1 className="header-font">
          Front Range Locksmith
          </h1>

          <div className="ListDetails">
            <div className="detail flexRow">
             <span className='fa fa-phone'></span> <a href="" className="aTag tag">720-439-4081</a>
            </div>
            <div className="detail flexRow">
            <span className='fa fa-phone'></span><a href="" className="aTag tag">Monday through Sunday, all day.</a>
            </div>

            <div className="detail flexRow">
            <span className='fa fa-phone'></span><a href="" className="aTag tag">frontrangelocksmith@gmail.com</a>
            </div>

            <div className="detail flexRow">
            <span className='fa fa-phone'></span><a href="" className="aTag tag">1257 Logan St #204, Denver</a>
            </div>
          </div>

<div className="logo">
  <Logo/>
</div>

<div className="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.7265358018385!2d-79.40218027591345!3d43.778535144315846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d15c4eb4b51%3A0x4ee913f40d4d553e!2zMTc1IEJ5bmcgQXZlLCBOb3J0aCBZb3JrLCBPTiBNMk4gNEs4LCDXp9eg15PXlA!5e0!3m2!1siw!2sil!4v1693153335774!5m2!1siw!2sil" className='mapIframe' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>

        </div>

{/* inputsSide */}
  <div className="flexCol ">
  <div className="formInputs flexCol">
        <lable className="label">YOUR NAME</lable>
        <input type="text" placeholder='Enter Your Name' className="inputText" />
       </div>

       <div className="formInputs flexCol">
        <lable className="label">E-MAIL ADDRESS</lable>
        <input type="text" placeholder='Enter Your E-mail address' className="inputText" />
       </div>
       <div className="formInputs flexCol">
        <lable className="label">PHONE NUMBER</lable>
        <input type="text" placeholder='Enter Your phone number' className="inputText" />
       </div>
       <div className="formInputs flexCol">
        <lable className="label">MESSAGE</lable>
<textarea name="" id="" cols="30" rows="10"></textarea>       </div>


  </div>

       </div>

       
       </div>

      


    
    </div>
  );
}

export default ContactComp;

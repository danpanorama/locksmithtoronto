import '../../App.css';
import '../../css/logo.css';
import HeaderPage from '../pagesComp/HeaderPage';
import NavPages from '../pagesComp/NavPages';
import ImageText from '../pagesComp/ImageText'
import TextImage from '../pagesComp/TextImage'
import ServiceSquare from './ServiceSquare';

function Service() {
  return (
    <div className="containerL">
       <NavPages header={"OUR SERVICES"} class={'imageAbout'} />
       <div className="containerL">
       <HeaderPage header={'Our Locksmith Services List'} />
   
       </div>
       <p className="textP TextMargin">Choose the service you need from the list below to get more information about availability and pricing. At Front Range Locksmith we offer all of our services 24/7 with no additional cost for after hour or weekend service. If you need immediate service, our average arrival time is 20 minutes. You can also schedule an appointment for a later time\day through our contact form or by phone: 720-439-4081. Our trip charge is $19, but we usually wave it for residential and commercial work.</p>

   
<div className="flexRow  wrap">
      <ServiceSquare text='We have vast experience with all years, makes and models. We also service all types of trucks, motorcycles and buses.' linkList={['Car Unlock','Lost Car Key Replacement','FOB Replacement','Car Key Copy and Program','Broken Car Key Extractions','Ignition Change\Repair Service','Motorcycle Key Replacements','Trunk Unlock']} />
    <ServiceSquare text='We have vast experience with all years, makes and models. We also service all types of trucks, motorcycles and buses.' linkList={['Car Unlock','Lost Car Key Replacement','FOB Replacement','Car Key Copy and Program','Broken Car Key Extractions','Ignition Change\Repair Service','Motorcycle Key Replacements','Trunk Unlock']} />


   <ServiceSquare text='We have vast experience with all years, makes and models. We also service all types of trucks, motorcycles and buses.' linkList={['Car Unlock','Lost Car Key Replacement','FOB Replacement','Car Key Copy and Program','Broken Car Key Extractions','Ignition Change\Repair Service','Motorcycle Key Replacements','Trunk Unlock']} />
    <ServiceSquare text='We have vast experience with all years, makes and models. We also service all types of trucks, motorcycles and buses.' linkList={['Car Unlock','Lost Car Key Replacement','FOB Replacement','Car Key Copy and Program','Broken Car Key Extractions','Ignition Change\Repair Service','Motorcycle Key Replacements','Trunk Unlock']} />

   </div>
   
    
    </div>
  );
}

export default Service;





import '../../App.css';
import '../../css/logo.css';
import HeaderPage from '../pagesComp/HeaderPage';
import NavPages from '../pagesComp/NavPages';
import ImageText from '../pagesComp/ImageText'
import TextImage from '../pagesComp/TextImage'
import ServiceSquare from './ServiceSquare';

function Service() {
  return (
    <div className="">
       <NavPages header={"OUR SERVICES"} class={'imageAbout'} />
       <div className="containerL ">
       <HeaderPage header={'Our Locksmith Services List'} />
   
       
       <p className="textP TextMargin">Choose the service you need from the list below to get more information about availability and pricing. At Cheetah Locksmith we offer all of our services 24/7 with no additional cost for after hour or weekend service. If you need immediate service, our average arrival time is 20 minutes. You can also schedule an appointment for a later time\day through our contact form.</p>

   
<div className="flexRowToCol  bet ">
      <ServiceSquare item={'1'}
      img={''} header={'Car Locksmith Service'} text='We have vast experience with all years, makes and models. We also service all types of trucks, motorcycles and buses.' linkList={['Car Unlock','Trunk Unlock']} />
    <ServiceSquare 
    item={'2'}
    img={''}  
    text='We offer a complete and comprehensive house locksmith service for any lock related service you need around the house.' 
    linkList={['House Unlock','Lock Change Service','Lock Rekey Service'
    ,'Lock Repair',
    'House Key Copy',
    'Keypad Installation',
    'Motorcycle Key Replacements',
    'Room \ Interior Door Unlock']} />
 </div>
<div className="flexRowToCol bet ">


   <ServiceSquare item={'3'}
   img={''}
   header={'Commercial Locksmith Services'} 
    text='Commercial locksmith service is our main expertise. We offer service for all types of commercial locks, including store front locks, master key systems, panic bars and more.'
     linkList={['Business Lock Change Service',
     'Master Key Systems',
     'Commercial Lock Rekey Service',
     'Panic Bar Repair and Installation',
     'Commercial Lever Handles Rekey',
     'Store Front Locks',
     'interchangeable Core Locks',
     'Commercial Lock Repair Service']} />
    
    
    
    <ServiceSquare item={'4'}
    img={''}
    header={'Other Services'} 
     text="Need a key made for a non-standard lock? Have a problem with you safe? We offer a wide variety of addition services. If you didn't find what you're looking for on the list, give us a call"
      linkList={['Emergency Safe Opening',
      'Safe Repair',
      'Combination Recovery',
      'Safe Key Replacement',
      'File Cabinet Locks',
      'Detex Lock Repair',
      'Other Service? Contact Us']} />
</div>
   </div>
  
    
    </div>
  );
}

export default Service;





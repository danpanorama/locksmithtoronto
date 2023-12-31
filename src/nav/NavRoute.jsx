import AboutScreen from '../pages/AboutScreen';
import ContactScreen from '../pages/ContactScreen';
import HomeScreen from '../pages/HomeScreen';
import Nav from './Nav';

import { Routes, useLocation, Route, Router } from "react-router-dom";
import NewNav from './NewNav';
import Socialbtn from '../components/btns/Socialbtn';
import CallButtons from '../components/btns/CallButtons';
import ServiceScreen from '../pages/ServiceScreen';
import ServiceDinamic from '../pages/ServiceDinamic';
import Test from '../pages/Test';

function NavRoute() {
  const location =useLocation()

  return (
    <div className="">
      {/* <div className="TopNav displayPhone flexRow bet containerL">
        
        <Socialbtn/>
        
      </div> */}
      <Nav/>
{/* <NewNav/> */}
<Routes basename='/about' location={location} key={location.pathname} >
      <Route path="*" element={<HomeScreen />} exact />
      <Route path="/" element={<HomeScreen />} exact />
 
      <Route path="/about" element={<AboutScreen />} exact />
      <Route path="/test" element={<Test />} exact />

      <Route path="/contact" element={<ContactScreen />} exact />
      <Route path="/service" element={<ServiceScreen />} exact />
      <Route path="/servicepage" element={<ServiceDinamic />} exact />


        <Route path="/404" element={<HomeScreen/>} exact/>
      </Routes>  
    </div>
  );
}

export default NavRoute;

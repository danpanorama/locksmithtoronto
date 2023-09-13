import "../App.css";
import CallButtons from "../components/btns/CallButtons";
import PhoneCall from "../components/btns/PhoneCall";
import Socialbtn from "../components/btns/Socialbtn";
import Logo from "../components/logo/Logo";
import "../css/nav.css";
import NavLinks from "./NavLinks";
import NewLinks from "./NewLinks";
import PhoneNav from "./PhoneNav";

function NewNav() {
  return (
    <div className="  NewNavBar flexRow  bet">
      <div className="containerL flexRow h100    bet center">
        <div className="flexRow center  marginAuto100">
          <Logo />
          <NewLinks />   <PhoneNav />
        </div>
        <div className="displayNone">
        <Socialbtn />
        </div>
        <CallButtons />
     
      </div>
    </div>
  );
}

export default NewNav;

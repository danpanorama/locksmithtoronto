import "../App.css";
import PhoneCall from "../components/btns/PhoneCall";
import Socialbtn from "../components/btns/Socialbtn";
import Logo from "../components/logo/Logo";
import "../css/nav.css";
import BottomNav from "./BottomNav";
import NavLinks from "./NavLinks";
import PhoneNav from "./PhoneNav";
import TopNav from "./TopNav";

function Nav() {
  return (
    <div className="barNav">
      <div className="">
        <div className="  NavBar   ">
          <div className="containerL">
            <div className="flexRow bet acenter navIn w100">
              <Logo /> <PhoneNav />
              <div className="flexRow displayNone">
                <Socialbtn />
                <PhoneCall />
              </div>
            </div>
          </div>

          <div className="LinksDIv displayNone ">
            <NavLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;

import { useEffect } from "react";
import "../App.css";
import "../css/nav.css";
import { useLocation } from "react-router-dom";
import NavPages from "../components/pagesComp/NavPages";
import HeaderDitails from "../components/pagesComp/HeaderDitails";
import ImageWithText from "../components/pagesComp/ImageWithText";
import DetailRow from "../components/details/DetailRow";
import RowSection from "../components/servicespages/RowSection";

function ServiceDinamic(props) {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (props.state == "1") {
      console.log("1");
    }
    console.log(location.state);
  }, []);
  return (
    <div className=" ">
      <NavPages header={location.state.header} class={"imageAbout"} />

      <div className="containerL">
        <HeaderDitails header={location.state.headerBlue} />
      </div>
      <ImageWithText text={location.state.textHeader} />

      <div className="containerService">
        <RowSection text={''} img={location.state.imageRow1} class={''} />
        <RowSection header={location.state.headerRow2} text={location.state.textRow2} img={location.state.image2} class={'rowRevers'} />
        <RowSection header={location.state.headerRow3} text={location.state.textRow3} img={location.state.image3} class={''} />
        <RowSection header={location.state.headerRow4} text={location.state.textRow4} img={location.state.image4} class={'rowRevers'} />
        <RowSection header={location.state.headerRow5} text={location.state.textRow5} img={location.state.image5} class={''} />

      </div>
    </div>
  );
}

export default ServiceDinamic;

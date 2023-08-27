import '../../App.css';
import '../../css/nav.css';

function NavPages(props) {
  return (
   <div className={props.class +" navPages"}>
   
     <div className="containerL ">
        <h1 className="NavHeader">
            {props.header}
        </h1>
       
    
    </div>
   </div>
  );
}

export default NavPages;

import '../../App.css';
import '../../css/nav.css';


function HeaderDitails(props) {
  return (
    <div className="flexRow center paadingHeaderService">
      
<div className="marginLeft">
<div className="flexCol bet">
    <h1 className="detailsService blackHeader marginBottom50">
        Cheetah Locksmith - 
        {/* 720-439-4081 */}
  </h1>
  <h1 className="detailsService bgblue header-font">
    {props.header}
  </h1> 
    </div>
</div>
       
    
    </div>
  );
}

export default HeaderDitails;

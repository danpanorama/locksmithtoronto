import '../../App.css';
import '../../css/btn.css';

function Socialbtn() {
  return (
    <div className="flexRow center socialBox">
     <a href="https://www.facebook.com/profile.php?id=61551114517836" className="cw">
       <div className="fab fa-facebook flexCol center Icon socialBtn facebook"></div></a>
       <div className="fab fa-twitter  flexCol center Icon socialBtn twitter"></div>
       <div className="fab fa-youtube  flexCol center Icon socialBtn youtube"></div>

    </div>
  );
}

export default Socialbtn;

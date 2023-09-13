import '../../App.css';
import '../../css/footer.css';
import PhoneCall from '../btns/PhoneCall';
import Socialbtn from '../btns/Socialbtn';


function BottomFooter() {
    return (
        <div className="bottomFooter  ">
            <div className="containerL flexRowToCol reverse bet acenter ">
  <div>
  <p className="copyRights cw paddingTop10">all the rights belong to cheetah locksmith</p>
<a href="mailto:Cheetahlocksmithto@gmail.com" className="email ">Cheetahlocksmithto@gmail.com</a>

  </div>
                <div className="socialButtons flexRowToCol h100 ">
                    <Socialbtn  />
                    <PhoneCall  class='cw' />
                </div>       
                 </div>



        </div>
    );
}

export default BottomFooter;

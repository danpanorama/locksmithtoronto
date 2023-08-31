import '../../App.css';
import '../../css/footer.css';
import PhoneCall from '../btns/PhoneCall';
import Socialbtn from '../btns/Socialbtn';


function BottomFooter() {
    return (
        <div className="bottomFooter  ">
            <div className="containerL flexRow bet ">
                <p className="copyRights cw">all the rights belong to cheetah locksmith</p>


                <div className="socialButtons flexRow h100 displayNone">
                    <Socialbtn  />
                    <PhoneCall  class='cw' />
                </div>       
                 </div>



        </div>
    );
}

export default BottomFooter;

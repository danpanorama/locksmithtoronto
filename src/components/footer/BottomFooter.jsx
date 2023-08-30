import '../../App.css';
import '../../css/footer.css';
import PhoneCall from '../btns/PhoneCall';
import Socialbtn from '../btns/Socialbtn';


function BottomFooter() {
    return (
        <div className="bottomFooter  ">
            <div className="containerL flexRow bet">
                <p className="copyRights">all the rights belong to cheetah locksmith</p>


                <div className="socialButtons flexRow">
                    <Socialbtn />
                    <PhoneCall />
                </div>       
                 </div>



        </div>
    );
}

export default BottomFooter;

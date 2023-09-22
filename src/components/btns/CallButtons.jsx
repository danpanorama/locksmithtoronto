import '../../App.css';
import '../../css/btn.css';

function CallButtons(props) {
  return (
    <div className="flexCol center ">
        <h3 className="navServiceCall displayNone">Free Service Call  24/7</h3>
        <div className="flexRow">
        <a href="tel:+972534656" className="phoneBTN bcYellow cb marginRight10 flexCol center fw500 phonebig">call now</a>
        <a href="tel:+972534656" className="phoneBTN displayNone bcBlue flexCol center cw">send message </a>
    </div>
    </div>
  );
}

export default CallButtons;

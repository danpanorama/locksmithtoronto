import "../../css/hometest.css";

function OpeningTest() {
  return (
    <div className="openImage flexCol acenter ">
      <div className="w70 flexRowToCol bet marginTop70 marginNonePhone">
        <div className="sideA ">
          <div className="header">
            <h1 className="headerH1 cw w80 marginBottom lineHeight">FRONT RANGE LOCKSMITH DENVER</h1>

            <h3 className="smallHeader cw">
              Locksmith in Denver, Colorado - 24/7 
            </h3>
            <h3 className="smallHeader cw marginBottom">
            Service
            </h3>
            <div className="FourSquaresGrid ">
              <div className="oneSquare">LOCKED KEYS IN CAR?</div>
              <div className="oneSquare">LOCKED OUT OF HOUSE?</div>
              <div className="oneSquare">NEED TO CHANGE LOCKS?</div>
              <div className="oneSquare">MORE SERVICES?</div>
            </div>
          </div>
        </div>



        <div className="sideB ">
            <h1 className="headerH1 cy ">CALL US 24/7!</h1>
            <h3 className="smallHeader cw displayNone">
            Locked out of your car? Need your locks changed?
            </h3>
            <h3 className="smallHeader cw displayNone">
             Lost your house keys? 
            </h3>
            <div className="grinRow ButtonsCall">
                <button className="buttonNumber btn marginRight10">
                    1561-235-1653
                </button>
                <button className="buttonPhone btn">
call
                </button>
            </div>
            <br />
            <span className="span cw w100 marginBottomPhone displayNone">Now receiving calls</span>
        </div>
      </div>
    </div>
  );
}

export default OpeningTest;

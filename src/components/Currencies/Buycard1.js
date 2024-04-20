import React from "react";
import Coin from "./Coin";

// load assets
import "../../assets/css/Buycryptor/buycard.scss";

const Buycard1 = ({ cardlogo, cardtitle, cardcontent, className }) => {
  return (
    <div className="buycard">
      <div className="buycardlogo">
        <div className="buycardimg">
          <img src={cardlogo}/>
        </div>
      </div>
      <div className="buycardtitle">
          {cardtitle}
      </div>
      <div className="buycontent">
          {cardcontent}
      </div>
    </div>


  );
};

export default Buycard1;

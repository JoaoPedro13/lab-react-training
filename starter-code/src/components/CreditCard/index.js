import React from "react";
import Visa from "../../img/visa.png";
import MasterCard from "../../img/master-card.svg";
import "./style.css";

function cardTypeToImg(type) {
  if (type === "Visa") {
    return Visa;
  } else if (type === "Master Card") {
    return MasterCard;
  }
}

function hideCardNumber(number) {
  return number.slice(12);
}

function index(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
  } = props;

  const cardType = cardTypeToImg(type);

  const divStyle = {
    backgroundColor: bgColor,
    color: color
  };
  return (
    <div style={divStyle} className="cards">
      <img src={cardType} width="50em" alt="card type" />
      <h4 className="cardNumber">
        &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679;
        &#9679;&#9679;&#9679;&#9679; {hideCardNumber(number)}
      </h4>
      <div className="cardText">
        <div className="cardBank">
          <p>
            Expires {expirationMonth}/{expirationYear}
          </p>
          <p>{bank}</p>
        </div>
        <div>
          <p>{owner}</p>
        </div>
      </div>
    </div>
  );
}

export default index;

/* 
type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" /> */

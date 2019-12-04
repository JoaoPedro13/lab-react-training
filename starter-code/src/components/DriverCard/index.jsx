import React from "react";
import "./style.css";

function formatRating(rating) {
  const stars = Math.round(rating);
  switch (stars) {
    case 5:
      return (
        <div className="rating">
          <p>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
        </div>
      );
    case 4:
      return (
        <div className="rating">
          <p>&#9733; &#9733; &#9733; &#9733; &#9734;</p>
        </div>
      );
    case 3:
      return (
        <div className="rating">
          <p>&#9733; &#9733; &#9733; &#9734; &#9734;</p>
        </div>
      );
    case 2:
      return (
        <div className="rating">
          <p>&#9733; &#9733; &#9734; &#9734; &#9734;</p>
        </div>
      );
    case 1:
      return (
        <div className="rating">
          <p>&#9733; &#9734; &#9734; &#9734; &#9734;</p>
        </div>
      );
    default:
      return (
        <div className="rating">
          <p>&#9734; &#9734; &#9734; &#9734; &#9734;</p>
        </div>
      );
  }
}

function index(props) {
  const { name, rating, img } = props;
  const car = props.car.model;
  const plate = props.car.licensePlate;
  return (
    <div className="DriverCard">
      <img src={img} width="200em" height="200em" alt="person" />
      <div className="Text">
        <h2>{name}</h2>
        <h2>{formatRating(rating)}</h2>
        <p>
          {car} - {plate}
        </p>
      </div>
    </div>
  );
}

export default index;

/* <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        /> */

// import rectangle from "../../../assets/img/background/Rectangle 217.png";

import { Link } from "react-router-dom";

export function RentelCard() {
  const myStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="rentel__card">
      <div className="rentelCard__bg" style={myStyle}>
        <div className="wishList__box"></div>
        <i className="ri-heart-3-line wish"></i>
      </div>
      <div className="rentelCard__content">
        <div className="rentel__titleStart">
          <div className="rt__title">
            <h3>Dylan Hotel</h3>
            <div className="star">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
          </div>
          <div className="rt__rating">
            <p>
              Very Good <span>5 reviews</span>
            </p>
            <h6>4.4/5</h6>
          </div>
        </div>
        <div className="rentel__para">
          <p>
            Facilities: Wake-up call . Car hire . Flat Tv . Laundry and dry
            cleaning . Internet – Wifi.
          </p>
        </div>
        <div className="rentel__address">
          <div className="rt__location">
            <i className="ri-map-pin-2-fill"></i>
            <span>California</span>
          </div>
          <div className="rt__price">
            <p>
              from <span>$550</span>/night
            </p>
          </div>
        </div>
      </div>
      <div className="rentel__btn">
        <Link to="/hotel_details" className="rt__btn">
          Book Now
        </Link>
        <Link to="/hotel_details" className="rt__btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

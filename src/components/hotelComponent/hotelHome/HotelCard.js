import React from "react";
import { Link } from "react-router-dom";

const HotelCard = () => {
  return (
    <>
      <div className="hotel__card mb-4">
        <div className="hotel__img position-relative">
          <img
            src={require("../../../assets/img/background/Rectangle 217.png")}
            alt=""
          />
          <span>7% off</span>
          <div className="heart__img">
            <i className="ri-heart-3-line"></i>
          </div>
        </div>
        <div className="hotel__content">
          <h3>Dylan Hotel</h3>
          <div className="star">
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
          </div>
          <p>
            Facilities: Wake-up call . Car hire . Flat Tv . Laundry and dry
            cleaning . Internet – Wifi . Coffee and tea.
          </p>
          <div className="location">
            <i class="ri-map-pin-range-fill"></i> <span>California</span>
          </div>

          <div className="hotel__rating">
            <i class="ri-bookmark-fill">
              <span>4.0</span>
            </i>
            <div className="htlRating__rightTxt">
              <p>
                Very Good <span>“Friendly service”</span>
              </p>
              <small>300 reviews</small>
            </div>
          </div>

          <ul className="htlService__tags">
            <li>
              {" "}
              <span>Free Cancellation</span>
            </li>
            <li>
              {" "}
              <span>Free Cancellation</span>
            </li>
          </ul>
        </div>

        <div className="hotel__rateBooking">
          <div className="rate">
            <p>
              Very Good
              <br /> <span>5 reviews</span>
            </p>
            <span>4.4/5</span>
          </div>
          <div className="hotel__btn">
            <Link to="/hotel_details" className="hotelBtn">
              Book Now
            </Link>
            <Link to="/hotel_details" className="hotelBtn">
              View Details
            </Link>
          </div>
          <div>
            <p>
              from <span>$550</span>/night
            </p>
            <p style={{ fontWeight: 700, color: "#2488B4", fontSize: "19px" }}>
              Total $1550/night
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelCard;

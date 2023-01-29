import React from "react";

const HotelEvents = () => {
  return (
    <div className="col-xl-12">
      <div className="beachEvent__box">
        <div className="beachEvent__content">
          <div className="beachLeft">
            <h3>Reset in Laguna Beach Events</h3>
            <p>
              <i className="ri-map-pin-2-fill"></i> California
            </p>
          </div>
          <div className="beachRight">
            <div className="be__review">
              <p>
                Very Good <span>5 reviews</span>
              </p>
              <span className="beRating">4.4/5</span>
            </div>
            <p>100% of guests recommend</p>
          </div>
        </div>
        <div className="beachEvent__service">
          <div className="beService__box">
            <div className="be__img">
              <img src="img/icon/Favorite.png" alt="" />
            </div>
            <div className="be__text">
              <h6>Reviews</h6>
              <p>People Rates it: 5 Star</p>
            </div>
          </div>
          <div className="beService__box">
            <div className="be__img">
              <img src="img/icon/Clock.png" alt="" />
            </div>
            <div className="be__text">
              <h6>Start Time</h6>
              <p>21:00</p>
            </div>
          </div>
          <div className="beService__box">
            <div className="be__img">
              <img src="img/icon/Infinity.png" alt="" />
            </div>
            <div className="be__text">
              <h6>Duration</h6>
              <p>9 hours</p>
            </div>
          </div>
          <div className="beService__box">
            <div className="be__img">
              <img src="img/icon/Island On Waters.png" alt="" />
            </div>
            <div className="be__text">
              <h6>Location</h6>
              <p>California</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelEvents;

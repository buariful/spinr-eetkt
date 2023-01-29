import React from "react";

const SideBarRentalCard = () => {
  return (
    <div class="rentel__card mb-4">
      <div
        className="rentelCard__bg"
        style={{
          backgroundImage: `url(${require("../../../assets/img/background/carbg.png")})`,
        }}
      >
        <span>OFFER</span>
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
        <div className="rentel__address">
          <div className="rt__location">
            <span>Canada</span>
          </div>
        </div>
      </div>
      <div className="rentel__btn">
        <button className="rt__btn bs__btn">
          <span>3 Night’s</span>
          <span className="susg">$ 344</span>
        </button>
        <button className="rt__btn bs__btn">
          <span>4 Night’s</span>
          <span className="susg">$ 411</span>
        </button>
        <button className="rt__btn bs__btn">
          <span>5 Night’s</span>
          <span className="susg">$ 522</span>
        </button>
      </div>
    </div>
  );
};

export default SideBarRentalCard;

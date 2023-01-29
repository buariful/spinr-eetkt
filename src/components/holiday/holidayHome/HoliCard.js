import React from "react";
import { Link } from "react-router-dom";

const HoliCard = () => {
  return (
    <>
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="selection__card">
          <div class="selecCard__img">
            <img
              src={require("../../../assets/img/holidaysCardImg/Rectangle 309.png")}
              alt=""
            />
            <div class="wishList__box">
              <i class="ri-heart-line"></i>
            </div>
          </div>
          <div class="selecCard__content">
            <div class="selecCard__details">
              <div class="selec__textLeft">
                <h6 class="text-truncate">Mercedes Benz</h6>
                <span>Virginia</span>
              </div>
              <div class="selec__priceRight text-center">
                <h5>$ 234</h5>
                <span>Per Day</span>
              </div>
            </div>
            <div class="selecCard__rating">
              <div class="star">
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
              </div>
              <div class="rating">
                <div class="rate__text">
                  <p>
                    Very Good <span>5 reviews</span>
                  </p>
                </div>
                <div class="rate__num">
                  <span>4.4/5</span>
                </div>
              </div>
            </div>
          </div>
          <div class="selec__btn d-flex">
            <Link to="/holiday_details">Book Now</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoliCard;

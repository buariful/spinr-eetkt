import React from "react";
import { Link } from "react-router-dom";

const CarCard = () => {
  return (
    <>
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="selection__card">
          <div class="selecCard__img">
            <img
              src={require("../../../assets/img/carsCardImg/Rectangle 204 (1).png")}
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
            <div class="selecCard__rating justify-content-around">
              <div class="car__icon text-center">
                <img
                  class="mb-1"
                  src={require("../../../assets/img/icon/Group 82.png")}
                  alt=""
                />
                <span class="d-block">5</span>
              </div>
              <div class="car__icon text-center">
                <img
                  class="mb-1"
                  src={require("../../../assets/img/icon/baggg.png")}
                  alt=""
                />
                <span class="d-block">3</span>
              </div>
              <div class="car__icon text-center">
                <img
                  class="mb-1"
                  src={require("../../../assets/img/icon/contect.png")}
                  alt=""
                />
                <span class="d-block">5</span>
              </div>
              <div class="car__icon text-center">
                <img
                  class="mb-1"
                  src={require("../../../assets/img/icon/carSmall.png")}
                  alt=""
                />
                <span class="d-block">5</span>
              </div>
            </div>
          </div>
          <div class="selec__btn d-flex">
            <Link to="/car_details">Book Now</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCard;

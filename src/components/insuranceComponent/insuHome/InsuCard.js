import React from "react";
import { Link } from "react-router-dom";

const InsuCard = () => {
  return (
    <>
      <div class="col-xl-12 d-flex justify-content-center">
        <div class="insurance__cardBox mb-4">
          <h6>BEST FOR AD&D COVERAGE</h6>
          <div class="insurance__content mb-4">
            <div class="insuranceLeft__content">
              <div class="insurance__up mb-4">
                <div class="insurance__logoName">
                  <div class="insurance__logo">
                    <img
                      src={require("../../../assets/img/logo/WhatsApp Image 2022-06-12 at 11.51.43 AM.jpeg")}
                      alt=""
                    />
                  </div>
                  <h4>John Hancock Insurance Agency</h4>
                </div>
                <div class="insurance__day">
                  <h2>30 day</h2>
                </div>
              </div>
              <div class="insurance__down">
                <div class="insurance__rate">
                  <h6>5.0</h6>
                  <div class="rating">
                    <div class="star">
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </div>
                    <p>
                      Forbes <span>ADVISOR</span>
                    </p>
                  </div>
                </div>
                <div class="insurance">
                  <p>Preferred Plan</p>
                  <span>Gold</span>
                </div>
                <div class="insurance">
                  <p>Covers Covid?</p>
                  <span>Yes</span>
                </div>
                <div class="insurance border-0">
                  <p>Location</p>
                  <span>New York, United State</span>
                </div>
              </div>
            </div>
            <div class="insuranceRight__content">
              <h4>BDT 2,00,000</h4>
              <div class="insurance__btn mb-3">
                <Link to="/insurance_details">
                  Book Now <i class="ri-arrow-right-line"></i>
                </Link>
                <Link to="/insurance_details">View Details</Link>
              </div>
              <p>Via Squaremouth’s Secure Website</p>
            </div>
          </div>
          <div class="insuranceDown__content">
            <h6 class="border-1 border-bottom pb-3 mb-3">
              Why We Picked It <i class="ri-arrow-down-s-fill"></i>
            </h6>
            <h6 class="m-0">
              Why We Picked It <i class="ri-arrow-down-s-fill"></i>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsuCard;

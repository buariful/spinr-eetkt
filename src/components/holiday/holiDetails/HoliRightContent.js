import React from "react";
import MemeberBox from "../../shared/member/MemeberBox";
import SideBarRentalCard from "../../shared/sideBarRentalCard/SideBarRentalCard";

const HoliRightContent = () => {
  return (
    <>
      <MemeberBox />
      <div class="infoPrice__box mb-4">
        <h1>
          <span>From</span> $750
        </h1>
        <div class="book__tab">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                BOOK
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                ENQUIRY
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabindex="0"
            >
              <div class="bookTab__details">
                <div class="date px-5 py-3 border-1 border-bottom border-dark d-flex justify-content-between align-items-center">
                  <div class="start__date">
                    <p>Start Date</p>
                    <span>Please select date!</span>
                  </div>
                  <i class="ri-arrow-down-s-line"></i>
                </div>
                <div class="vip_tic px-5 py-3 border-1 border-bottom border-dark d-flex justify-content-between align-items-center">
                  <div class="start__date">
                    <p>Adult</p>
                    <span>$1.000 per person</span>
                  </div>
                  <div class="priceRange">
                    <span>
                      <span>-</span>
                    </span>
                    <p>1</p>
                    <span>
                      <span>+</span>
                    </span>
                  </div>
                </div>
                <div class="grp_tic px-5 py-3 border-1 border-bottom border-dark d-flex justify-content-between align-items-center">
                  <div class="start__date">
                    <p>Child</p>
                    <span>$500 per person</span>
                  </div>
                  <div class="priceRange">
                    <span>
                      <span>-</span>
                    </span>
                    <p>0</p>
                    <span>
                      <span>+</span>
                    </span>
                  </div>
                </div>
                <div class="extra_price px-5 py-3 border-1 border-bottom border-dark ">
                  <div class="start__date mb-4">
                    <p>Extra prices:</p>
                  </div>
                  <div class="priceList">
                    <ul>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span>Event service</span>
                        </div>
                        $1,000
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="service__fee px-5 py-3 border-1 border-bottom border-dark d-flex justify-content-between align-items-center">
                  <div class="start__date">
                    <p>Service fee :</p>
                  </div>
                  <div class="priceRange">
                    <p>$100</p>
                  </div>
                </div>
                <div class="infoPrice__btn d-flex px-5 py-3">
                  <a href="payment.html">BOOK NOW</a>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabindex="0"
            >
              <div class="bookTab__details">
                <div class="date px-5 py-3 border-1 border-bottom border-dark d-flex justify-content-between align-items-center">
                  <div class="start__date">
                    <p>Start Date</p>
                    <span>Please select date!</span>
                  </div>
                  <i class="ri-arrow-down-s-line"></i>
                </div>
                <div class="vip_tic px-5 py-3 border-1 border-bottom border-dark d-flex justify-content-between align-items-center">
                  <div class="start__date">
                    <p>Adult</p>
                    <span>$1.000 per person</span>
                  </div>
                  <div class="priceRange">
                    <span>
                      <span>-</span>
                    </span>
                    <p>1</p>
                    <span>
                      <span>+</span>
                    </span>
                  </div>
                </div>
                <div class="grp_tic px-5 py-3 border-1 border-bottom border-dark d-flex justify-content-between align-items-center">
                  <div class="start__date">
                    <p>Child</p>
                    <span>$500 per person</span>
                  </div>
                  <div class="priceRange">
                    <span>
                      <span>-</span>
                    </span>
                    <p>0</p>
                    <span>
                      <span>+</span>
                    </span>
                  </div>
                </div>
                <div class="extra_price px-5 py-3 border-1 border-bottom border-dark ">
                  <div class="start__date mb-4">
                    <p>Extra prices:</p>
                  </div>
                  <div class="priceList">
                    <ul>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span>Event service</span>
                        </div>
                        $1,000
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="service__fee px-5 py-3 border-1 border-bottom border-dark d-flex justify-content-between align-items-center">
                  <div class="start__date">
                    <p>Service fee :</p>
                  </div>
                  <div class="priceRange">
                    <p>$100</p>
                  </div>
                </div>
                <div class="infoPrice__btn d-flex px-5 py-3">
                  <a href="payment.html">BOOK NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="susgest__trip rentelSlider">
        <h4>You might also like</h4>
        <SideBarRentalCard />
        <SideBarRentalCard />
      </div>
    </>
  );
};

export default HoliRightContent;

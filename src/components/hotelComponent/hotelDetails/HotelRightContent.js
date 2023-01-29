import React from "react";
import MemeberBox from "../../shared/member/MemeberBox";
import SideBarRentalCard from "../../shared/sideBarRentalCard/SideBarRentalCard";

const HotelRightContent = () => {
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
                <div class="date px-5 py-3 border-1 border-bottom border-dark">
                  <div class="start__date mb-3 d-flex justify-content-between align-items-center">
                    <p>PROPERTY TYPE</p>
                    <i class="ri-arrow-down-s-line"></i>
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
                          <span>Apartments</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span>Homestays</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span>Motels</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span>Resorts</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="date px-5 py-3 border-1 border-bottom border-dark">
                  <div class="start__date mb-3 d-flex justify-content-between align-items-center">
                    <p>FACILITIES</p>
                    <i class="ri-arrow-down-s-line"></i>
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
                          <span> Wake-up call</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span> Flat Tv</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span> Laundry and dry cleaning</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span> Internet – Wifi</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span> Coffee and tea</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="date px-5 py-3 border-1 border-bottom border-dark">
                  <div class="start__date mb-3 d-flex justify-content-between align-items-center">
                    <p>HOTEL SERVICE</p>
                    <i class="ri-arrow-down-s-line"></i>
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
                          <span> Hotel transport services</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span> Free luggage deposit</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span> Laundry and dry cleaning</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span> Pets welcome</span>
                        </div>
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
                <div class="date px-5 py-3 border-1 border-bottom border-dark">
                  <div class="start__date mb-3 d-flex justify-content-between align-items-center">
                    <p>PROPERTY TYPE</p>
                    <i class="ri-arrow-down-s-line"></i>
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
                          <span>Apartments</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span>Homestays</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span>Motels</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span>Resorts</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="date px-5 py-3 border-1 border-bottom border-dark">
                  <div class="start__date mb-3 d-flex justify-content-between align-items-center">
                    <p>FACILITIES</p>
                    <i class="ri-arrow-down-s-line"></i>
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
                          <span> Wake-up call</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span> Flat Tv</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span> Laundry and dry cleaning</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span> Internet – Wifi</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span> Coffee and tea</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="date px-5 py-3 border-1 border-bottom border-dark">
                  <div class="start__date mb-3 d-flex justify-content-between align-items-center">
                    <p>HOTEL SERVICE</p>
                    <i class="ri-arrow-down-s-line"></i>
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
                          <span> Hotel transport services</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span> Free luggage deposit</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span> Laundry and dry cleaning</span>
                        </div>
                      </li>
                      <li>
                        <div class="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span> Pets welcome</span>
                        </div>
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

export default HotelRightContent;

import React from "react";
import MemeberBox from "../../shared/member/MemeberBox";
import SideBarRentalCard from "../../shared/sideBarRentalCard/SideBarRentalCard";

const CarRIghtContent = () => {
  return (
    <>
      <MemeberBox />
      <div className="infoPrice__box mb-4">
        <h1>
          <span>From</span> $750
        </h1>
        <div className="book__tab">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
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
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
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
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex="0"
            >
              <div className="bookTab__details">
                <div className="date px-5 py-3 border-1 border-bottom border-dark d-flex justify-content-between align-items-center">
                  <div className="start__date">
                    <p>Start Date</p>
                    <span>Please select date!</span>
                  </div>
                  <i className="ri-arrow-down-s-line"></i>
                </div>
                <div className="vip_tic px-5 py-3 border-1 border-bottom border-dark d-flex justify-content-between align-items-center">
                  <div className="start__date">
                    <p>Ticket Vip</p>
                    <span>$1.000 per ticket</span>
                  </div>
                  <div className="priceRange">
                    <span>
                      <span>-</span>
                    </span>
                    <p>500</p>
                    <span>
                      <span>+</span>
                    </span>
                  </div>
                </div>
                <div className="grp_tic px-5 py-3 border-1 border-bottom border-dark d-flex justify-content-between align-items-center">
                  <div className="start__date">
                    <p>Group Tickets</p>
                    <span>$5000 per ticket</span>
                  </div>
                  <div className="priceRange">
                    <span>
                      <span>-</span>
                    </span>
                    <p>300</p>
                    <span>
                      <span>+</span>
                    </span>
                  </div>
                </div>
                <div className="extra_price px-5 py-3 border-1 border-bottom border-dark ">
                  <div className="start__date mb-4">
                    <p>Extra prices:</p>
                  </div>
                  <div className="priceList">
                    <ul>
                      <li>
                        <div className="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span>Child Toddler Seat</span>
                        </div>
                        $1,000
                      </li>
                      <li>
                        <div className="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span>Child Toddler Seat</span>
                        </div>
                        $1,000
                      </li>
                      <li>
                        <div className="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span>Child Toddler Seat</span>
                        </div>
                        $1,000
                      </li>
                      <li>
                        <div className="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span>Child Toddler Seat</span>
                        </div>
                        $1,000
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="service__fee px-5 py-3 border-1 border-bottom border-dark d-flex justify-content-between align-items-center">
                  <div className="start__date">
                    <p>Service fee :</p>
                  </div>
                  <div className="priceRange">
                    <p>$300</p>
                  </div>
                </div>
                <div className="infoPrice__btn d-flex px-5 py-3">
                  <a href="payment.html">BOOK NOW</a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex="0"
            >
              <div className="bookTab__details">
                <div className="date px-5 py-3 border-1 border-bottom border-dark d-flex justify-content-between align-items-center">
                  <div className="start__date">
                    <p>Start Date</p>
                    <span>Please select date!</span>
                  </div>
                  <i className="ri-arrow-down-s-line"></i>
                </div>
                <div className="vip_tic px-5 py-3 border-1 border-bottom border-dark d-flex justify-content-between align-items-center">
                  <div className="start__date">
                    <p>Ticket Vip</p>
                    <span>$1.000 per ticket</span>
                  </div>
                  <div className="priceRange">
                    <span>
                      <span>-</span>
                    </span>
                    <p>500</p>
                    <span>
                      <span>+</span>
                    </span>
                  </div>
                </div>
                <div className="grp_tic px-5 py-3 border-1 border-bottom border-dark d-flex justify-content-between align-items-center">
                  <div className="start__date">
                    <p>Group Tickets</p>
                    <span>$5000 per ticket</span>
                  </div>
                  <div className="priceRange">
                    <span>
                      <span>-</span>
                    </span>
                    <p>300</p>
                    <span>
                      <span>+</span>
                    </span>
                  </div>
                </div>
                <div className="extra_price px-5 py-3 border-1 border-bottom border-dark ">
                  <div className="start__date mb-4">
                    <p>Extra prices:</p>
                  </div>
                  <div className="priceList">
                    <ul>
                      <li>
                        <div className="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span>Child Toddler Seat</span>
                        </div>
                        $1,000
                      </li>
                      <li>
                        <div className="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span>Child Toddler Seat</span>
                        </div>
                        $1,000
                      </li>
                      <li>
                        <div className="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span>Child Toddler Seat</span>
                        </div>
                        $1,000
                      </li>
                      <li>
                        <div className="priceList__check">
                          <input
                            type="checkbox"
                            name="priceList"
                            id="priceList"
                          />
                          <span>Child Toddler Seat</span>
                        </div>
                        $1,000
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="service__fee px-5 py-3 border-1 border-bottom border-dark d-flex justify-content-between align-items-center">
                  <div className="start__date">
                    <p>Service fee :</p>
                  </div>
                  <div className="priceRange">
                    <p>$300</p>
                  </div>
                </div>
                <div className="infoPrice__btn d-flex px-5 py-3">
                  <a href="payment.html">BOOK NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="susgest__trip rentelSlider">
        <h4>You might also like</h4>
        <div className="sideCard">
          <SideBarRentalCard />

          <SideBarRentalCard />
        </div>
      </div>
    </>
  );
};

export default CarRIghtContent;

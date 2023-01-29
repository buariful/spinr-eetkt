import React from "react";
import { useSelector } from "react-redux";
import BusSidebar from "../../components/busComponent/busHome/BusSidebar";
import BusCard from "../../components/busComponent/busHome/BusCard";
import CustomPagination from "../../components/shared/pgination/CustomPagination";
import SponsorSlider from "../../components/shared/sponsorSlider/SponsorSlider";

export default function BusBooking() {
  const { form, to, availableRoutes, isLoading } = useSelector(
    (state) => state.bus
  );

  let availableRoutesContent = "";

  if (isLoading === true) {
    availableRoutesContent = <div className="text-center">Loading...</div>;

    // }
    //  else if(availableRoutes.length===0){

    //     availableRoutesContent = <div className="text-center">No Bus Found!</div>
  } else if (availableRoutes.length > 0 && isLoading === false) {
    availableRoutesContent = availableRoutes.map((route, index) => (
      <div className="bookingList mb-5">
        <h4>Departing on 23 July 2022</h4>
        <div className="bookingList__box">
          <div className="bookingTransition__info">
            <div className="smallLogo transi__logo">
              <img
                src="img/airlines logo/613-6134771_oman-air-logo-oman-air-logo-2019-hd 1.png"
                alt=""
              />
            </div>
            <div className="transition__info">
              <div className="transition__details">
                <h6>{route?.operator}</h6>
                <div className="transition__duration">
                  <div className="mct">
                    <p>MCT</p>
                    <h4>{route?.start_time?.substring(0, 5)}</h4>
                  </div>
                  <div className="duration">
                    <p>Non-Stop</p>
                    <div className="startEnd">
                      <i className="ri-map-pin-2-fill"></i>
                      <span></span>
                      <img src="img/icon/busVector.png" alt="" />
                    </div>
                    <p>04H : 25M</p>
                  </div>
                  <div className="cgp">
                    <p>CGP</p>
                    <h4>{route?.end_time?.substring(0, 5)}</h4>
                  </div>
                </div>
                <div className="arrival">
                  <p className="mb-2">Arrivel</p>
                  <p>23 July 2022</p>
                </div>
              </div>
              <div className="transition__refundable">
                <div className="refund">
                  <i className="ri-money-dollar-circle-line"></i>
                  <span>Refundable</span>
                </div>
                <p>
                  ( Seat Available : <span>12</span>/ Baggage :{" "}
                  <span>36 Kg</span>)
                </p>
              </div>
            </div>
            <div className="transition__priceBook">
              <div className="transition__price">
                <h4>BDT {route?.fare}</h4>
              </div>
              <div className="transition__priceBtn">
                <a href="busBookingDetails.html">Book Now</a>
                <a href="/">View Details</a>
              </div>
            </div>
          </div>
          <h4>Return on 27 July 2022</h4>
          <div className="bookingTransition__info border-top border-1 border-dark">
            <div className="smallLogo transi__logo">
              <img
                src="img/airlines logo/613-6134771_oman-air-logo-oman-air-logo-2019-hd 1.png"
                alt=""
              />
            </div>
            <div className="transition__info">
              <div className="transition__details">
                <h6>{route?.operator}</h6>
                <div className="transition__duration">
                  <div className="mct">
                    <p>MCT</p>
                    <h4>{route?.start_time?.substring(0, 5)}</h4>
                  </div>
                  <div className="duration">
                    <p>Stop</p>
                    <div className="startEnd">
                      <i className="ri-map-pin-2-fill"></i>
                      <span>
                        <span className="num">2</span>
                      </span>
                      <img src="img/icon/busVector.png" alt="" />
                    </div>
                    <p>04H : 25M</p>
                  </div>
                  <div className="cgp">
                    <p>CGP</p>
                    <h4>{route?.end_time?.substring(0, 5)}</h4>
                  </div>
                </div>
                <div className="arrival">
                  <p className="mb-2">Arrivel</p>
                  <p>23 July 2022</p>
                </div>
              </div>
              <div className="transition__refundable">
                <div className="refund refundRed">
                  <i className="ri-money-dollar-circle-line"></i>
                  <span>Non-Refundable</span>
                </div>
                <p>
                  ( Seat Available : <span>12</span>/ Baggage :{" "}
                  <span>36 Kg</span>)
                </p>
              </div>
            </div>
            <div className="transition__priceBook">
              <div className="transition__price">
                <h4>BDT {route?.fare}</h4>
              </div>
              <div className="transition__priceBtn">
                <a href="busBookingDetails.html">Book Now</a>
                <a href="/">View Details</a>
              </div>
            </div>
          </div>
          <div className="moreFlight">
            <button className="moreFlight__btn">
              <i className="ri-add-fill"></i> Show More Flight
            </button>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <section className="sponserSlider__section rentelListing__section">
        <SponsorSlider />
      </section>

      <section className="flightTransition__section">
        <div className="container-fluid">
          <div className="row mx-1 mx-md-4">
            <div className="col-xl-3">
              <BusSidebar />
            </div>
            <div className="col-xl-9">
              <div className="bookingList__btn mb-5">
                <button className="bk__btn border-end border-2">
                  <p>Best</p>
                  <span>$235.23</span>
                </button>
                <button className="bk__btn border-end border-2">
                  <p>Cheapest</p>
                  <span>$123.99</span>
                </button>
                <button className="bk__btn">
                  <p>Quickest</p>
                  <span>$235.23</span>
                </button>
              </div>
              <BusCard />
              <BusCard />
              <BusCard />
              <CustomPagination />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

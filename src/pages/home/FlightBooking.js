import React from "react";
import FlightSideBar from "../../components/flightComponent/flights/FlightSideBar";
import FlightCard from "../../components/flightComponent/flights/FlightCard";
import CustomPagination from "../../components/shared/pgination/CustomPagination";
import SponsorSlider from "../../components/shared/sponsorSlider/SponsorSlider";

export default function FlightBooking() {
  return (
    <div>
      <section
        className="flightBooking__section loginBg"
        style={{
          backgroundImage: `url(${require("../../assets/img/background/sunshane.png")})`,
        }}
      >
        <div className="flightBooking__header">
          <div className="container-fluid">
            <div className="row mx-1 mx-md-4">
              <div className="col-md-6 mb-4">
                <div className="flight__btnGrp__left">
                  <button className="fl__btn">Return</button>
                  <button className="flWay__btn">One way</button>
                  <button className="flMulti__btn">Multi-city</button>
                </div>
              </div>
              <div className="col-md-6 mb-4 d-flex align-items-end justify-content-end">
                <div className="flight__text__right">
                  <p>
                    <i className="ri-star-s-fill"></i> TRRUSTED CHOICE
                  </p>
                  <p>
                    <i className="ri-star-s-fill"></i> SECURE BOOKING
                  </p>
                </div>
              </div>
              <div className="col-xl-2 mb-3 mb-xl-0 col-sm-6">
                <div className="flyBook">
                  <input
                    type="text"
                    name="flyFrom"
                    id="flyFrom"
                    placeholder="Flying From"
                  />
                </div>
              </div>
              <div className="col-xl-2 gx-4 gx-lx-0 mb-3 mb-xl-0 col-sm-6">
                <div className="flyBook">
                  <input
                    type="text"
                    name="flyto"
                    id="flyto"
                    placeholder="Flying To"
                  />
                </div>
              </div>
              <div className="col-xl-3 col-md-5 col-sm-6 mb-md-0 mb-3">
                <div className="fly__date">
                  <input
                    className="border-end"
                    type="date"
                    name="date"
                    id="date"
                  />
                  <input type="date" name="date" id="date" />
                </div>
              </div>
              <div className="col-xl-3 col-md-5 col-sm-6 mb-md-0 mb-3">
                <div className="fly__text">
                  <p className="border-end">1 Audlt</p>
                  <p>Economey</p>
                </div>
              </div>
              <div className="col-xl-2 col-md-2 col-12">
                <button className="flight__btn">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*===================== sponsor slider =============== */}
      <SponsorSlider />

      <section className="flightTransition__section">
        <div className="container-fluid">
          <div className="row mx-1 mx-md-4">
            <div className="col-xl-3">
              <FlightSideBar />
            </div>
            <div className="col-xl-9">
              <FlightCard />
              <FlightCard />
              <FlightCard />

              <CustomPagination />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

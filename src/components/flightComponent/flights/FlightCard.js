import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FlightCard = () => {
  const [showPrice, setShowPrice] = useState(false);
  return (
    <div class="bookingList mb-5">
      <div className="d-flex justify-content-between align-items-center">
        <h4>Departing on 23 July 2022</h4>
        <label className="agentPriceToggle">
          <div>
            <input type="checkbox" onChange={() => setShowPrice(!showPrice)} />
          </div>
          <span>Show Agent Price</span>
        </label>
      </div>
      <div class="bookingList__box">
        <div class="bookingTransition__info">
          <div class="transition__info">
            <div class="transition__details">
              <div class="smallLogo transi__logo">
                <img
                  src={require("../../../assets/img/airlines logo/613-6134771_oman-air-logo-oman-air-logo-2019-hd 1.png")}
                  alt=""
                />
              </div>
              <div>
                <h6>Oman air</h6>
                <p>WB-325</p>
                <p style={{ fontSize: "20px" }}>Economy</p>
              </div>
              <div class="transition__duration">
                <div class="mct">
                  <p>MCT</p>
                  <h4>06:25</h4>
                </div>
                <div class="duration">
                  <p>Non-Stop</p>
                  <div class="startEnd">
                    <i class="ri-map-pin-2-fill"></i>
                    <span></span>
                    <i class="ri-plane-line plane"></i>
                  </div>
                  <p>04H : 25M</p>
                </div>
                <div class="cgp">
                  <p>CGP</p>
                  <h4>12:45</h4>
                </div>
              </div>
              <div class="arrival">
                <p class="mb-2">Arrivel</p>
                <p>23 July 2022</p>
              </div>
            </div>
            <div class="transition__refundable">
              <div class="refund">
                <i class="ri-money-dollar-circle-line"></i>
                <span>Refundable</span>
              </div>
              <p className="d-flex justify-content-between align-items-center">
                ( Seat Available : <span>12</span>/ Baggage :<span>36 Kg</span>)
              </p>

              <div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "1px 14px",
                    background: "#4085D6",
                    color: "white",
                    fontFamily: "Ubuntu",
                    fontSize: "14px",
                    borderRadius: "5px",
                    marginLeft: "10px",
                  }}
                >
                  7% off
                </span>
              </div>
            </div>
          </div>
          <div class="transition__priceBook">
            <div class="transition__price">
              <p>
                <i style={{ color: "#00AD1C", fontSize: "13px" }}>
                  Limited Promotion!!
                </i>
              </p>
              <p style={{ color: "#4085D6", fontSize: "14px" }}>
                Gross BDT 54,268
              </p>
              {showPrice ? (
                <p style={{ color: "#848484", fontSize: "12px" }}>
                  Agent BDT 5,268
                </p>
              ) : (
                ""
              )}
              <p style={{ color: "#00AD1C", fontSize: "12px" }}>
                Profit BDT 4,000
              </p>
            </div>
            <div class="transition__priceBtn">
              <Link to="/flight_details">Book Now</Link>
              <Link to="/flight_details">View Details</Link>
            </div>
          </div>
        </div>
        <h4>Return on 27 July 2022</h4>
        <div class="bookingTransition__info border-top border-1 border-dark">
          <div class="transition__info">
            <div class="transition__details">
              <div class="smallLogo transi__logo">
                <img
                  src={require("../../../assets/img/airlines logo/613-6134771_oman-air-logo-oman-air-logo-2019-hd 1.png")}
                  alt=""
                />
              </div>
              <div>
                <h6>Oman air</h6>
                <p>WB-325</p>
                <p style={{ fontSize: "20px" }}>Economy</p>
              </div>
              <div class="transition__duration">
                <div class="mct">
                  <p>MCT</p>
                  <h4>06:25</h4>
                </div>
                <div class="duration">
                  <p>Stop</p>
                  <div class="startEnd">
                    <i class="ri-map-pin-2-fill"></i>
                    <span>
                      <span class="num">2</span>
                    </span>
                    <i class="ri-plane-line plane"></i>
                  </div>
                  <p>04H : 25M</p>
                </div>
                <div class="cgp">
                  <p>CGP</p>
                  <h4>12:45</h4>
                </div>
              </div>
              <div class="arrival">
                <p class="mb-2">Arrivel</p>
                <p>23 July 2022</p>
              </div>
            </div>
            <div class="transition__refundable">
              <div class="refund refundRed">
                <i class="ri-money-dollar-circle-line"></i>
                <span>Non-Refundable</span>
              </div>
              <p>
                ( Seat Available : <span>12</span>/ Baggage :<span>36 Kg</span>)
              </p>
            </div>
          </div>
          <div class="transition__priceBook">
            <div class="transition__price">
              <p>
                <i style={{ color: "#00AD1C", fontSize: "13px" }}>
                  Limited Promotion!!
                </i>
              </p>
              <p style={{ color: "#4085D6", fontSize: "14px" }}>
                Gross BDT 54,268
              </p>
              {showPrice ? (
                <p style={{ color: "#848484", fontSize: "12px" }}>
                  Agent BDT 5,268
                </p>
              ) : (
                ""
              )}
              <p style={{ color: "#00AD1C", fontSize: "12px" }}>
                Profit BDT 54,268
              </p>
            </div>
            <div class="transition__priceBtn">
              <Link to="/flight_details">Book Now</Link>
              <Link to="/flight_details">View Details</Link>
            </div>
          </div>
        </div>
        <div class="moreFlight">
          <button class="moreFlight__btn">
            <i class="ri-add-fill"></i> Show More Flight
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;

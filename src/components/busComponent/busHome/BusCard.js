import React from "react";
import { Link } from "react-router-dom";

const BusCard = () => {
  return (
    <div className="bookingList mb-5">
      <div className="d-flex justify-content-between">
        <h4>Departing on 23 July 2022</h4>
      </div>

      <div className="bookingList__box">
        <div className="bookingTransition__info">
          <div className="transition__info">
            <div className="transition__details">
              <div className="smallLogo transi__logo">
                <img
                  src={require("../../../assets/img/bus logo/Rectangle 234.png")}
                  alt=""
                />
              </div>
              <h6>Oman air</h6>

              <div className="transition__duration">
                <div className="mct">
                  <p>MCT</p>
                  <h4>06:25</h4>
                </div>
                <div className="duration">
                  <p>Non-Stop</p>
                  <div className="startEnd">
                    <i className="ri-map-pin-2-fill"></i>
                    <span></span>
                    <i class="ri-bus-2-fill"></i>
                  </div>
                  <p>04H : 25M</p>
                </div>
                <div className="cgp">
                  <p>CGP</p>
                  <h4>12:45</h4>
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
                ( Seat Available : <span style={{ color: "#00AD1C" }}>12</span>/
                Baggage : <span style={{ color: "#00AD1C" }}>36 Kg</span>)
              </p>
            </div>
          </div>
          <div className="transition__priceBook">
            <div className="transition__price">
              <h4>BDT 54,268</h4>
              <h3>BDT 50,268</h3>
            </div>
            <div className="transition__priceBtn">
              <Link to="/bus_details">Book Now</Link>
              <a href="/">View Details</a>
            </div>
          </div>
        </div>
        <h4>Return on 27 July 2022</h4>
        <div className="bookingTransition__info border-top border-1 border-dark">
          <div className="transition__info">
            <div className="transition__details">
              <div className="smallLogo transi__logo">
                <img
                  src={require("../../../assets/img/bus logo/Rectangle 236.png")}
                  alt=""
                />
              </div>
              <h6>oman air</h6>

              <div className="transition__duration">
                <div className="mct">
                  <p>MCT</p>
                  <h4>06:25</h4>
                </div>
                <div className="duration">
                  <p>Stop</p>
                  <div className="startEnd">
                    <i className="ri-map-pin-2-fill"></i>
                    <span>
                      <span className="num">2</span>
                    </span>
                    <i class="ri-bus-2-fill"></i>
                  </div>
                  <p>04H : 25M</p>
                </div>
                <div className="cgp">
                  <p>CGP</p>
                  <h4>12:45</h4>
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
                ( Seat Available : <span style={{ color: "#00AD1C" }}>12</span>/
                Baggage : <span style={{ color: "#00AD1C" }}>36 Kg</span>)
              </p>
            </div>
          </div>
          <div className="transition__priceBook">
            <div className="transition__price">
              <h4>BDT 54,268</h4>
              <h3>BDT 50,268</h3>
            </div>
            <div className="transition__priceBtn">
              <Link to="/bus_details">Book Now</Link>
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
  );
};

export default BusCard;

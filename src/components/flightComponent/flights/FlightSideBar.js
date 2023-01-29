import React, { useRef, useState } from "react";
import polygonImg from "../../../assets/img/icon/Polygon 3.png";
import omanAirLogo from "../../../assets/img/airlines logo/613-6134771_oman-air-logo-oman-air-logo-2019-hd 1.png";

const FlightSideBar = () => {
  const [showPriceRange, setPriceRange] = useState(false);
  const [showStope, setStope] = useState(false);
  const [airlines, setAirlines] = useState(false);
  const [departureTime, setDepartureTime] = useState(false);
  const [arrivalTime, setArrivalTime] = useState(false);
  const [connectionTime, setConnectionTime] = useState(false);
  const [dates, setDates] = useState(false);
  const [airports, setAirports] = useState(false);

  const pricePolygon = useRef(null);
  const stopePolygon = useRef(null);
  const airlinesPolygon = useRef(null);
  const departureTimePolygon = useRef(null);
  const arrivalTimePolygon = useRef(null);
  const connectionTimePolygon = useRef(null);
  const datesPolygon = useRef(null);
  const airportsPolygon = useRef(null);

  const toggleShowOff = (element, state, setState) => {
    console.log("lksdflsjd");
    if (!state) {
      element.current.style.transform = "rotate(0deg)";
      element.current.style.transition = ".5s";
      setState(!state);
    } else {
      element.current.style.transform = "rotate(180deg)";
      element.current.style.transition = ".5s";
      setState(!state);
    }
  };

  let timeChart = (
    <div className="row border border-2 border-dark rounded mb-4">
      <button className="col border-0 p-0 bg-transparent d-flex flex-column justify-content-center align-items-center">
        <i class="ri-haze-fill"></i>
        <p style={{ fontSize: "12px" }}>00-06</p>
      </button>

      <button className="col p-0 bg-transparent border-0 border-end border-start border-dark d-flex flex-column justify-content-center align-items-center">
        <i class="ri-sun-fill"></i>
        <p style={{ fontSize: "12px" }}>00-06</p>
      </button>

      <button className="col p-0 bg-transparent border-0 border-end border-dark d-flex flex-column justify-content-center align-items-center">
        <i class="ri-moon-foggy-fill"></i>
        <p style={{ fontSize: "12px" }}>00-06</p>
      </button>

      <button className="col border-0 p-0 bg-transparent d-flex flex-column justify-content-center align-items-center">
        <i class="ri-moon-fill"></i>
        <p style={{ fontSize: "12px" }}>00-06</p>
      </button>
    </div>
  );
  return (
    <div className="flight__left__filter">
      <h4 style={{ color: "#FF6B00" }} className="border-bottom p-4">
        Refine Your Scearch <i className="ri-filter-3-fill"></i>
      </h4>

      <div className="sidePnal">
        {/* ============ price range =========== */}
        <div className="under__filter p-4 border-bottom">
          <h4>
            Price{" "}
            <img
              src={polygonImg}
              alt=""
              ref={pricePolygon}
              onClick={() =>
                toggleShowOff(pricePolygon, showPriceRange, setPriceRange)
              }
            />
          </h4>
          {showPriceRange ? (
            ""
          ) : (
            <div className="box__filter">
              <p>
                <span>BDT 26,554</span>.<span>BDT 95,546</span>
              </p>
              <div className="price__range">
                <div className="middle">
                  <div className="multi-range-slider">
                    <input
                      type="range"
                      id="input-left"
                      min="0"
                      max="100"
                      value="25"
                    />
                    <input
                      type="range"
                      id="cowbell"
                      name="cowbell"
                      min="0"
                      max="100"
                      value="90"
                    ></input>
                    <input
                      type="range"
                      id="input-right"
                      min="0"
                      max="100"
                      value="75"
                    />

                    <div className="slider">
                      <div className="track"></div>
                      <div className="range"></div>
                      <div className="thumb left"></div>
                      <div className="thumb right"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ============= stope ============= */}
        <div className="under__filter p-4 border-bottom">
          <h4>
            No. of Stope{" "}
            <img
              src={polygonImg}
              alt=""
              ref={stopePolygon}
              onClick={() => toggleShowOff(stopePolygon, showStope, setStope)}
            />
          </h4>
          {showStope ? (
            ""
          ) : (
            <div className="box__filter">
              <ul>
                <li>
                  <input type="checkbox" name="check" id="check" /> Non Stope
                </li>
                <li>
                  <input type="checkbox" name="check" id="check" /> 1 Stope
                </li>
                <li>
                  <input type="checkbox" name="check" id="check" /> 1+ Stope
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* ================ airlines ============ */}
        <div className="under__filter p-4 border-bottom">
          <h4>
            Airlines{" "}
            <img
              src={polygonImg}
              alt=""
              ref={airlinesPolygon}
              onClick={() =>
                toggleShowOff(airlinesPolygon, airlines, setAirlines)
              }
            />
          </h4>
          {airlines ? (
            ""
          ) : (
            <div className="box__filter">
              <ul>
                <li>
                  <input type="checkbox" name="check" id="check" />
                  <div className="smallLogo">
                    <img src={omanAirLogo} alt="" />
                  </div>
                  Oman Airlines
                </li>
                <li>
                  <input type="checkbox" name="check" id="check" />
                  <div className="smallLogo">
                    <img src={omanAirLogo} alt="" />
                  </div>{" "}
                  Oman Airlines
                </li>
                <li>
                  <input type="checkbox" name="check" id="check" />
                  <div className="smallLogo">
                    <img src={omanAirLogo} alt="" />
                  </div>{" "}
                  Oman Airlines
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* ================ departure time ================== */}
        <div className="under__filter p-4 border-bottom">
          <h4>
            Departure Time{" "}
            <img
              src={polygonImg}
              alt=""
              ref={departureTimePolygon}
              onClick={() =>
                toggleShowOff(
                  departureTimePolygon,
                  departureTime,
                  setDepartureTime
                )
              }
            />
          </h4>
          {departureTime ? (
            ""
          ) : (
            <div className="box__filter">
              <div className="departure_content">
                <h3 className="mb-2">From OMAN</h3>
                {timeChart}
                <h3 className="mb-2">To BANGLADESH</h3>
                {timeChart}
              </div>
            </div>
          )}
        </div>

        {/* ==================== arrival time =================== */}
        <div className="under__filter p-4 border-bottom">
          <h4>
            Arrival Time{" "}
            <img
              src={polygonImg}
              alt=""
              ref={arrivalTimePolygon}
              onClick={() =>
                toggleShowOff(arrivalTimePolygon, arrivalTime, setArrivalTime)
              }
            />
          </h4>

          {arrivalTime ? (
            ""
          ) : (
            <div className="box__filter">
              <p>
                <span>BDT 26,554</span>.<span>BDT 95,546</span>
              </p>
              <div className="price__range">
                <div className="middle">
                  <div className="multi-range-slider">
                    <input
                      type="range"
                      id="input-left2"
                      min="0"
                      max="100"
                      value="25"
                    />
                    <input
                      type="range"
                      id="input-right2"
                      min="0"
                      max="100"
                      value="75"
                    />

                    <div className="slider">
                      <div className="track"></div>
                      <div className="range range2"></div>
                      <div className="thumb left left2"></div>
                      <div className="thumb right right2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ================= connection time ================== */}
        <div className="under__filter p-4 border-bottom">
          <h4>
            Connection Time{" "}
            <img
              src={polygonImg}
              alt=""
              ref={connectionTimePolygon}
              onClick={() =>
                toggleShowOff(
                  connectionTimePolygon,
                  connectionTime,
                  setConnectionTime
                )
              }
            />
          </h4>

          {connectionTime ? (
            ""
          ) : (
            <div className="box__filter">
              <div className="connection">
                <p>Show Layover Up To</p>
                <select name="hours" id="hours">
                  <option value="21 hours">21 hours</option>
                  <option value="21 hours">05 hours</option>
                  <option value="21 hours">12 hours</option>
                  <option value="21 hours">19 hours</option>
                  <option value="21 hours">26 hours</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* ================ dates ======================== */}
        <div className="under__filter p-4 border-bottom">
          <h4>
            Dates{" "}
            <img
              src={polygonImg}
              alt=""
              ref={datesPolygon}
              onClick={() => toggleShowOff(datesPolygon, dates, setDates)}
            />
          </h4>

          {dates ? (
            ""
          ) : (
            <div className="box__filter">
              <ul>
                <li>
                  <input type="checkbox" name="check" id="check" /> Show
                  airlinemate dates
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* =========== Airports ===========================*/}
        <div
          style={{ bordeRadius: "10px" }}
          className="under__filter p-4 border-bottom"
        >
          <h4>
            Airportes{" "}
            <img
              src={polygonImg}
              alt=""
              ref={airportsPolygon}
              onClick={() =>
                toggleShowOff(airportsPolygon, airports, setAirports)
              }
            />
          </h4>

          {airports ? (
            ""
          ) : (
            <div className="box__filter">
              <h6 className="mb-2 border-bottom pb-2">Departing from</h6>
              <ul className="mb-3">
                <li>
                  <input type="checkbox" name="check" id="check" /> Dhaka
                  Airpport
                </li>
                <li>
                  <input type="checkbox" name="check" id="check" /> Goa Airpport
                </li>
                <li>
                  <input type="checkbox" name="check" id="check" /> Tokyo
                  Airpport
                </li>
              </ul>
              <h6 className="mb-2 border-bottom pb-2">Arriving at</h6>
              <ul>
                <li>
                  <input type="checkbox" name="check" id="check" /> Dhaka
                  Airpport
                </li>
                <li>
                  <input type="checkbox" name="check" id="check" /> Goa Airpport
                </li>
                <li>
                  <input type="checkbox" name="check" id="check" /> Tokyo
                  Airpport
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightSideBar;

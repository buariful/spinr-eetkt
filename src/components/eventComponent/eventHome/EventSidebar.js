import React from "react";

const EventSidebar = () => {
  return (
    <>
      <div class="flight__left__filter">
        <h4 style={{ color: "#FF6B00" }} class="border-bottom p-4">
          Filter by <i class="ri-filter-3-fill"></i>
        </h4>
        <div class="sidePnal">
          <div class="under__filter p-4 border-bottom">
            <h4>
              Filter Price <img src="img/icon/Polygon 3.png" alt="" />
            </h4>
            <div class="box__filter">
              <p>
                <span>BDT 26,554</span>.<span>BDT 95,546</span>
              </p>
              <div class="price__range">
                <div class="middle">
                  <div class="multi-range-slider">
                    <input
                      type="range"
                      id="input-left"
                      min="0"
                      max="100"
                      value="25"
                    />
                    <input
                      type="range"
                      id="input-right"
                      min="0"
                      max="100"
                      value="75"
                    />

                    <div class="slider">
                      <div class="track"></div>
                      <div class="range"></div>
                      <div class="thumb left"></div>
                      <div class="thumb right"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="under__filter p-4 border-bottom">
            <h4>
              Event type <img src="img/icon/Polygon 3.png" alt="" />
            </h4>
            <div class="box__filter">
              <ul>
                <li>
                  <input type="checkbox" name="check" id="check" />
                  Field Day
                </li>
                <li>
                  <input type="checkbox" name="check" id="check" />
                  Glastonbury
                </li>
                <li>
                  <input type="checkbox" name="check" id="check" />
                  Boomtown
                </li>
              </ul>
            </div>
          </div>
          <div class="under__filter p-4 border-bottom">
            <h4>
              Facilities <img src="img/icon/Polygon 3.png" alt="" />
            </h4>
            <div class="box__filter">
              <ul>
                <li>
                  <input type="checkbox" name="check" id="check" />
                  Event Alarm
                </li>
                <li>
                  <input type="checkbox" name="check" id="check" />
                  Internet – Wifi
                </li>
                <li>
                  <input type="checkbox" name="check" id="check" />
                  Car Parking
                </li>
              </ul>
            </div>
          </div>
          <div class="under__filter p-4 border-bottom">
            <h4>
              Event Service
              <img src="img/icon/Polygon 3.png" alt="" />
            </h4>
            <div class="box__filter">
              <ul>
                <li>
                  <input type="checkbox" name="check" id="check" />
                  Primavera Sound
                </li>
                <li>
                  <input type="checkbox" name="check" id="check" />
                  Fiesta Restaurant
                </li>
                <li>
                  <input type="checkbox" name="check" id="check" />
                  Pets welcome
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{ borderRadius: "10px" }}
            class="under__filter p-4 border-bottom"
          >
            <h4>
              Review Score <img src="img/icon/Polygon 3.png" alt="" />
            </h4>
            <div class="box__filter">
              <ul>
                <li>
                  <input type="radio" name="check" id="check" />
                  <div class="filter__star">
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                  </div>
                </li>
                <li>
                  <input type="radio" name="check" id="check" />
                  <div class="filter__star">
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                  </div>
                </li>
                <li>
                  <input type="radio" name="check" id="check" />
                  <div class="filter__star">
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                  </div>
                </li>
                <li>
                  <input type="radio" name="check" id="check" />
                  <div class="filter__star">
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                  </div>
                </li>
                <li>
                  <input type="radio" name="check" id="check" />
                  <div class="filter__star">
                    <i class="ri-star-s-fill"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      /
    </>
  );
};

export default EventSidebar;

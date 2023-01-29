import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetAvailableBusRoutesQuery,
  useSearchBusRoutesMutation,
} from "../../features/bus/busApi";
import { useGetDistrictsQuery } from "../../features/open/openApi";
import AirplaneTakeOffPic from "../../assets/img/icon/Airplane Take Off.png";
import InsurancePic1 from "../../assets/img/icon/Insurance-In 1.png";
import InsuranceOut1 from "../../assets/img/icon/Insurance-Out 1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Thumbs, Pagination } from "swiper";
import { useRef } from "react";

export function HeroBanner() {
  const homeSlider = useRef();

  const [formPlace, setFormPlace] = useState("");
  const [toPlace, setToPlace] = useState("");
  const [selectedNav, setSelectedNav] = useState("");

  const {
    data: districts,
    isLoading: districtsLoading,
    isError: districtsError,
  } = useGetDistrictsQuery();
  const [searchBusRoutes, { data: availableBusRoutes }] =
    useSearchBusRoutesMutation();

  const districtOptions = districts?.data?.map((district, index) => {
    let option = (
      <option key={index} value={district.name}>
        {district.name}
      </option>
    );
    return option;
  });

  const handleFind = (e) => {
    e.preventDefault();
    searchBusRoutes({ form: formPlace, to: toPlace, page: 1 });
  };

  const pagination = {
    clickable: true,
  };

  return (
    <section className="heroBnnr__section">
      <div className="headerBnnr">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          pagination={pagination}
          modules={[Pagination, FreeMode, Navigation, Thumbs, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          onBeforeInit={(swiper) => {
            homeSlider.current = swiper;
          }}
        >
          <SwiperSlide className="detailsPage_slide">
            <img
              src={require("../../assets/img/background/holidaysbg.png")}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="detailsPage_slide">
            <img
              src={require("../../assets/img/background/Rectangle 2 (1).png")}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="detailsPage_slide">
            <img
              src={require("../../assets/img/background/holibg.png")}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="detailsPage_slide">
            <img
              src={require("../../assets/img/background/Rectangle 2 (2).png")}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="detailsPage_slide">
            <img
              src={require("../../assets/img/background/Rectangle 2 (3).png")}
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        <div
          className="swiper-button-next"
          onClick={() => homeSlider.current?.slideNext()}
        >
          <i className="ri-arrow-right-line"></i>
        </div>
        <div
          className="swiper-button-prev"
          onClick={() => homeSlider.current?.slidePrev()}
        >
          <i className="ri-arrow-left-line"></i>
        </div>
        <div className="swiper-pagination"></div>
      </div>

      {/* =============== banner options ================= */}
      <div className="header__tab">
        <div className="tab__box">
          <nav>
            <div className="nav nav-tabs tabButton" id="nav-tab" role="tablist">
              <Link to="/flight_booking">
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-Flight"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  onClick={() => setSelectedNav("Flight")}
                >
                  Flight
                </button>
              </Link>
              <Link to="/bus_booking">
                <button
                  className="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-Bus"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                  onClick={() => setSelectedNav("Bus")}
                >
                  Bus
                </button>
              </Link>
              <Link to="/hotel_booking">
                <button
                  className="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-Hotel"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                  onClick={() => setSelectedNav("Hotel")}
                >
                  Hotel
                </button>
              </Link>
              <Link to="/insurance_booking">
                <button
                  className="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-Insurance"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                  onClick={() => setSelectedNav("Insurance")}
                >
                  Insurance
                </button>
              </Link>
              <Link to="/holiday_booking">
                <button
                  className="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-Holidays"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                  onClick={() => setSelectedNav("Holidays")}
                >
                  Holidays
                </button>
              </Link>
              <Link to="/event_booking">
                <button
                  className="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-Event"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                  onClick={() => setSelectedNav("Event")}
                >
                  Event
                </button>
              </Link>
              <Link to="/car_booking">
                <button
                  className="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-Cars"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                  onClick={() => setSelectedNav("Cars")}
                >
                  Cars
                </button>
              </Link>
              <Link to="/visa_booking">
                <button
                  className="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-Visa"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                  onClick={() => setSelectedNav("Visa")}
                >
                  Visa
                </button>
              </Link>
            </div>
          </nav>
          <div className="tab-content tabBox" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-Flight"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabIndex="0"
            >
              <div className="headerTab__top">
                <div className="header__inputSearch">
                  <div className="fly">
                    <select name="flyFrom" id="flyFrom">
                      <option value="flyingFrom">Flying From</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                    </select>
                    <i className="ri-flight-takeoff-line"></i>
                  </div>
                  <i className="fa-solid fa-code-compare"></i>
                  <div className="fly">
                    <select name="flyTo" id="flyTo">
                      <option value="flyingTo">Flying To</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                    </select>
                    <i className="ri-flight-land-line"></i>
                  </div>
                </div>
                <div className="header__dateMonth">
                  <div className="trip">
                    <input
                      type="text"
                      name="month"
                      id="month"
                      placeholder="Trip Start"
                    />
                    <img src={InsurancePic1} alt="" />
                  </div>
                  <div className="trip">
                    <input
                      type="text"
                      name="month"
                      id="month"
                      placeholder="Trip End"
                    />
                    <img src={InsuranceOut1} alt="" />
                  </div>
                </div>
              </div>
              <div className="headerTab__bottom">
                <div className="header__infoTab">
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Return</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Passenger</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">All Cabins</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Preferred Airlines</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
                <div className="promoCode">
                  <button>Promo Code?</button>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-Bus"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabIndex="0"
            >
              <div className="headerTab__top">
                <div className="header__inputSearch">
                  <div className="fly">
                    <select
                      name="flyFrom"
                      id="flyFrom"
                      onChange={(e) => setFormPlace(e.target.value)}
                    >
                      <option disabled value="flyingFrom">
                        Travelling From
                      </option>
                      {districtOptions}
                    </select>
                    <i className="ri-bus-fill"></i>
                  </div>
                  <i className="fa-solid fa-code-compare"></i>
                  <div className="fly">
                    <select
                      name="flyTo"
                      id="flyTo"
                      onChange={(e) => setToPlace(e.target.value)}
                    >
                      <option disabled value="flyingTo">
                        Travelling To
                      </option>
                      {districtOptions}
                    </select>
                    <i className="ri-bus-fill"></i>
                  </div>
                </div>
                <div className="header__dateMonth">
                  <input type="date" name="month" id="month" />
                  <input type="date" name="month" id="month" />
                </div>
              </div>
              <div className="headerTab__bottom">
                <div className="header__infoTab">
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Return</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">All Cabins</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Bus Type</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Preferred Bus</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
                <div className="promoCode">
                  <button>Promo Code?</button>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-Hotel"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
              tabIndex="0"
            >
              <div className="headerTab__top">
                <div className="header__inputSearch">
                  <div className="fly">
                    <select name="flyFrom" id="flyFrom">
                      <option value="flyingFrom">Location</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                    </select>
                    <i className="ri-map-2-line"></i>
                  </div>
                  <div className="fly">
                    <select name="flyTo" id="flyTo">
                      <option value="flyingTo">2 Adults - 0 Child</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                    </select>
                    <i
                      style={{ top: "5px" }}
                      className="fa-solid fa-person-walking-luggage"
                    ></i>
                  </div>
                </div>
                <div className="header__dateMonth">
                  <input type="date" name="month" id="month" />
                  <input type="date" name="month" id="month" />
                </div>
              </div>
              <div className="headerTab__bottom justify-content-end">
                <div className="promoCode">
                  <button>Promo Code?</button>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-Insurance"
              role="tabpanel"
              aria-labelledby="nav-disabled-tab"
              tabIndex="0"
            >
              <div className="headerTab__top">
                <div className="header__inputSearch">
                  <div className="fly">
                    <select name="flyFrom" id="flyFrom">
                      <option value="flyingFrom">Flying From</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                    </select>
                    <i className="ri-flight-takeoff-line"></i>
                  </div>
                  <i className="fa-solid fa-code-compare"></i>
                  <div className="fly">
                    <select name="flyTo" id="flyTo">
                      <option value="flyingTo">Flying To</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                    </select>
                    <i className="ri-flight-land-line"></i>
                  </div>
                </div>
                <div className="header__dateMonth">
                  <input type="date" name="month" id="month" />
                  <input type="date" name="month" id="month" />
                </div>
              </div>
              <div className="headerTab__bottom">
                <div className="header__infoTab">
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Return</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Passenger</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">All Cabins</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Preferred Airlines</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
                <div className="promoCode">
                  <button>Promo Code?</button>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="nav-Holidays"
              role="tabpanel"
              aria-labelledby="nav-disabled-tab"
              tabIndex="0"
            >
              <div className="headerTab__top">
                <div className="header__inputSearch">
                  <div className="fly">
                    <select name="flyFrom" id="flyFrom">
                      <option value="flyingFrom">Flying From</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                    </select>
                    <i className="ri-flight-takeoff-line"></i>
                  </div>
                  <i className="fa-solid fa-code-compare"></i>
                  <div className="fly">
                    <select name="flyTo" id="flyTo">
                      <option value="flyingTo">Flying To</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                    </select>
                    <i className="ri-flight-land-line"></i>
                  </div>
                </div>
                <div className="header__dateMonth">
                  <input type="date" name="month" id="month" />
                  <input type="date" name="month" id="month" />
                </div>
              </div>
              <div className="headerTab__bottom">
                <div className="header__infoTab">
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Return</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Passenger</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">All Cabins</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Preferred Airlines</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
                <div className="promoCode">
                  <button>Promo Code?</button>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-Event"
              role="tabpanel"
              aria-labelledby="nav-disabled-tab"
              tabIndex="0"
            >
              <div className="headerTab__top">
                <div className="header__inputSearch">
                  <div className="fly">
                    <select name="flyFrom" id="flyFrom">
                      <option value="flyingFrom">Flying From</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                    </select>
                    <i className="ri-flight-takeoff-line"></i>
                  </div>
                  <i className="fa-solid fa-code-compare"></i>
                  <div className="fly">
                    <select name="flyTo" id="flyTo">
                      <option value="flyingTo">Flying To</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                    </select>
                    <i className="ri-flight-land-line"></i>
                  </div>
                </div>
                <div className="header__dateMonth">
                  <input type="date" name="month" id="month" />
                  <input type="date" name="month" id="month" />
                </div>
              </div>
              <div className="headerTab__bottom">
                <div className="header__infoTab">
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Return</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Passenger</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">All Cabins</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Preferred Airlines</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
                <div className="promoCode">
                  <button>Promo Code?</button>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-Cars"
              role="tabpanel"
              aria-labelledby="nav-disabled-tab"
              tabIndex="0"
            >
              <div className="headerTab__top">
                <div className="header__inputSearch">
                  <div className="fly">
                    <select name="flyFrom" id="flyFrom">
                      <option value="flyingFrom">Flying From</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                    </select>
                    <i className="ri-flight-takeoff-line"></i>
                  </div>
                  <i className="fa-solid fa-code-compare"></i>
                  <div className="fly">
                    <select name="flyTo" id="flyTo">
                      <option value="flyingTo">Flying To</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                    </select>
                    <i className="ri-flight-land-line"></i>
                  </div>
                </div>
                <div className="header__dateMonth">
                  <input type="date" name="month" id="month" />
                  <input type="date" name="month" id="month" />
                </div>
              </div>
              <div className="headerTab__bottom">
                <div className="header__infoTab">
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Return</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Passenger</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">All Cabins</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Preferred Airlines</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
                <div className="promoCode">
                  <button>Promo Code?</button>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-Visa"
              role="tabpanel"
              aria-labelledby="nav-disabled-tab"
              tabIndex="0"
            >
              <div className="headerTab__top">
                <div className="header__inputSearch">
                  <div className="fly">
                    <select name="flyFrom" id="flyFrom">
                      <option value="flyingFrom">Flying From</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                    </select>
                    <i className="ri-flight-takeoff-line"></i>
                  </div>
                  <i className="fa-solid fa-code-compare"></i>
                  <div className="fly">
                    <select name="flyTo" id="flyTo">
                      <option value="flyingTo">Flying To</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                      <option value="bangladesh">bangladesh</option>
                    </select>
                    <i className="ri-flight-land-line"></i>
                  </div>
                </div>
                <div className="header__dateMonth">
                  <input type="date" name="month" id="month" />
                  <input type="date" name="month" id="month" />
                </div>
              </div>
              <div className="headerTab__bottom">
                <div className="header__infoTab">
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Return</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Passenger</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">All Cabins</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                  <div className="select">
                    <select name="return" id="return">
                      <option value="canada">Preferred Airlines</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                      <option value="canada">canada</option>
                    </select>
                    <i className="ri-arrow-down-s-line"></i>
                  </div>
                </div>
                <div className="promoCode">
                  <button>Promo Code?</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab__button">
          <div
            onClick={handleFind}
            style={{ cursor: "pointer" }}
            className="tabclick"
            id="nav-Flight"
            role="tabpanel"
            aria-labelledby="nav-disabled-tab"
            tabIndex="0"
          >
            <div className="tabImg">
              <img src={AirplaneTakeOffPic} alt="as" />
            </div>
            <p>Find {selectedNav ? selectedNav : "Flight"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

const HotelSlider = () => {
  return (
    <div className="col-xl-12">
      <div className="beachEvent__slider">
        <div
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          className="swiper busStandSlider2"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide beImg">
              <img
                src={require("../../../assets/img/background/Rectangle 219.png")}
                alt=""
              />
            </div>
            <div className="swiper-slide beImg">
              <img
                src={require("../../../assets/img/background/Rectangle 220.png")}
                alt=""
              />
            </div>
            <div className="swiper-slide beImg">
              <img
                src={require("../../../assets/img/background/Rectangle 221.png")}
                alt=""
              />
            </div>
            <div className="swiper-slide beImg">
              <img
                src={require("../../../assets/img/background/Rectangle 218.png")}
                alt=""
              />
            </div>
            <div className="swiper-slide beImg">
              <img
                src={require("../../../assets/img/background/Rectangle 217.png")}
                alt=""
              />
            </div>
          </div>
          <div className="swiper-button-next">
            <i className="ri-arrow-right-s-line"></i>
          </div>
          <div className="swiper-button-prev">
            <i className="ri-arrow-left-s-line"></i>
          </div>
        </div>
        <div thumbsSlider="" className="swiper busStandSlider">
          <div className="swiper-wrapper">
            <div className="swiper-slide beImg2">
              <img
                src={require("../../../assets/img/background/Rectangle 219.png")}
                alt=""
              />
            </div>
            <div className="swiper-slide beImg2">
              <img
                src={require("../../../assets/img/background/Rectangle 220.png")}
                alt=""
              />
            </div>
            <div className="swiper-slide beImg2">
              <img
                src={require("../../../assets/img/background/Rectangle 221.png")}
                alt=""
              />
            </div>
            <div className="swiper-slide beImg2">
              <img
                src={require("../../../assets/img/background/Rectangle 218.png")}
                alt=""
              />
            </div>
            <div className="swiper-slide beImg2">
              <img
                src={require("../../../assets/img/background/Rectangle 217.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSlider;

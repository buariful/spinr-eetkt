import React from "react";

export default function BusSlider() {
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
                src={require("../../../assets/img/background/Rectangle 312.png")}
                alt=""
              />
            </div>
            <div className="swiper-slide beImg">
              <img
                src={require("../../../assets/img/background/Rectangle 313.png")}
                alt=""
              />
            </div>
            <div className="swiper-slide beImg">
              <img
                src={require("../../../assets/img/background/Rectangle 314.png")}
                alt=""
              />
            </div>
            <div className="swiper-slide beImg">
              <img
                src={require("../../../assets/img/background/Rectangle 315.png")}
                alt=""
              />
            </div>
            <div className="swiper-slide beImg">
              <img
                src={require("../../../assets/img/background/Rectangle 316.png")}
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
                src={require("../../../assets/img/background/Rectangle 312.png")}
                alt=""
              />
            </div>
            <div className="swiper-slide beImg2">
              <img
                src={require("../../../assets/img/background/Rectangle 313.png")}
                alt=""
              />
            </div>
            <div className="swiper-slide beImg2">
              <img
                src={require("../../../assets/img/background/Rectangle 314.png")}
                alt=""
              />
            </div>
            <div className="swiper-slide beImg2">
              <img
                src={require("../../../assets/img/background/Rectangle 315.png")}
                alt=""
              />
            </div>
            <div className="swiper-slide beImg2">
              <img
                src={require("../../../assets/img/background/Rectangle 316.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

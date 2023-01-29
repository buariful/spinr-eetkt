import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SponsorSlider = () => {
  const swiperRef = useRef();
  return (
    <section className="sponserSlider__section">
      <div className="container-fluid">
        <div className="row mx-1 mx-md-4">
          <div className="col-xl-12">
            <div className="sponslider position-relative">
              <Swiper
                centeredSlides={true}
                slidesPerView={1}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  450: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                  992: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                  },
                  1400: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="airlines__logo">
                    <img
                      src={require("../../../assets/img/airlines logo/20-205338_saudia-airlines-logo-vector-logo-saudi-arabian-airlines 1.png")}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="airlines__logo">
                    <img
                      src={require("../../../assets/img/airlines logo/613-6134771_oman-air-logo-oman-air-logo-2019-hd 1.png")}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="airlines__logo">
                    <img
                      src={require("../../../assets/img/airlines logo/American_Airlines_(7).png")}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="airlines__logo">
                    <img
                      src={require("../../../assets/img/airlines logo/Emirates-Logo-PNG5.png")}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="airlines__logo">
                    <img
                      src={require("../../../assets/img/airlines logo/20-205338_saudia-airlines-logo-vector-logo-saudi-arabian-airlines 1.png")}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              {/* ============ arrow button ========== */}
              <div onClick={() => swiperRef.current?.slidePrev()}>
                <button className="fliSliderPrevBtn">
                  <i class="ri-arrow-left-s-line"></i>
                </button>
              </div>
              <div onClick={() => swiperRef.current?.slideNext()}>
                <button className="fliSliderNxtBtn">
                  <i class="ri-arrow-right-s-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSlider;

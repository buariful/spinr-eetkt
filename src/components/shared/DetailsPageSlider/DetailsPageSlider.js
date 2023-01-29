/* eslint-disable array-callback-return */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";

function DetailsPageSlider() {
  const detailsSliderBtn = useRef();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="col-12 p-0">
        {/* =================== Main Slider ======================= */}
        <div className="mt-5 mb-2 position-relative">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            className={"detailsPage_swiper"}
            onBeforeInit={(swiper) => {
              detailsSliderBtn.current = swiper;
            }}
          >
            <SwiperSlide className="detailsPage_slide">
              <img
                src={require("../../../assets/img/background/Rectangle 217.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="detailsPage_slide">
              <img
                src={require("../../../assets/img/background/Rectangle 218.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="detailsPage_slide">
              <img
                src={require("../../../assets/img/background/Rectangle 219.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="detailsPage_slide">
              <img
                src={require("../../../assets/img/background/Rectangle 220.png")}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          {/* -------- arrow button ---------- */}
          <div onClick={() => detailsSliderBtn.current?.slidePrev()}>
            <button className="deSlidPrev_btn deSlideBtn">
              <i class="ri-arrow-left-s-line"></i>
            </button>
          </div>
          <div onClick={() => detailsSliderBtn.current?.slideNext()}>
            <button className="deSlidNxt_btn deSlideBtn">
              <i class="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>

        {/* ================== Thumb Slider ======================= */}
        <div className="mb-5">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={"detailsPage_swiper_thumb"}
          >
            <SwiperSlide className="detailsPage_slide_thumb">
              <img
                src={require("../../../assets/img/background/Rectangle 217.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="detailsPage_slide_thumb">
              <img
                src={require("../../../assets/img/background/Rectangle 218.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="detailsPage_slide_thumb">
              <img
                src={require("../../../assets/img/background/Rectangle 219.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="detailsPage_slide_thumb">
              <img
                src={require("../../../assets/img/background/Rectangle 220.png")}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default DetailsPageSlider;

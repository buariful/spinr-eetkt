import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { TopDestinationBox } from "./TopDestinationBox";
import { useRef } from "react";

export function TopDestinationSection() {
  const swiperRef = useRef();

  return (
    <section className="topdestination__section">
      <div className="container-fluid">
        <div className="row mx-1 mx-md-4">
          <div className="col-xl-12">
            <div className="topdestination__title text-center mb-5">
              <h2>Top Destinations</h2>
              <p>It is a long established fact that a reader</p>
            </div>
          </div>
          <div className="col-xl-12 position-relative">
            <Swiper
              modules={[Autoplay, Navigation]}
              loop={true}
              //   autoplay={{ delay: 4000, disableOnInteraction: false }}
              speed={2000}
              spaceBetween={25}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="topDesSlider"
            >
              <SwiperSlide>
                <div className="row">
                  <TopDestinationBox />
                  <TopDestinationBox />
                  <TopDestinationBox />
                  <TopDestinationBox />
                  <TopDestinationBox />
                  <TopDestinationBox />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <TopDestinationBox />
                  <TopDestinationBox />
                  <TopDestinationBox />
                  <TopDestinationBox />
                  <TopDestinationBox />
                  <TopDestinationBox />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <TopDestinationBox />
                  <TopDestinationBox />
                  <TopDestinationBox />
                  <TopDestinationBox />
                  <TopDestinationBox />
                  <TopDestinationBox />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <TopDestinationBox />
                  <TopDestinationBox />
                  <TopDestinationBox />
                  <TopDestinationBox />
                  <TopDestinationBox />
                  <TopDestinationBox />
                </div>
              </SwiperSlide>
            </Swiper>
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className="topDesNext__btn topDesArrow"
            >
              <i class="ri-arrow-right-s-line"></i>
            </div>
            <div
              onClick={() => swiperRef.current?.slideNext()}
              className="topDesPrev__btn topDesArrow"
            >
              <i class="ri-arrow-left-s-line"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HoliItinerary = () => {
  const itinerySwiper = useRef();
  return (
    <>
      <div class="col-xl-12">
        <div class="features">
          <h3 class="mb-4">Itinerary</h3>

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
                itinerySwiper.current = swiper;
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              breakpoints={{
                450: {
                  slidesPerView: 1,
                  spaceBetween: 25,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
            >
              <SwiperSlide>
                <div
                  class="itinerary__card"
                  style={{
                    backgroundImage: `url(${require("../../../assets/img/background/sky.png")})`,
                  }}
                >
                  <div class="iti__content">
                    <span>Day 1</span>
                    <h4>Los Angeles</h4>
                    <p class="pShow">
                      “Pack up the van in the morning and check out the stars on
                      the most famous sidewalk in Hollywood on an orientation
                      tour”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="itinerary__card"
                  style={{
                    backgroundImage: `url(${require("../../../assets/img/background/sky.png")})`,
                  }}
                >
                  <div class="iti__content">
                    <span>Day 1</span>
                    <h4>Los Angeles</h4>
                    <p class="pShow">
                      “Pack up the van in the morning and check out the stars on
                      the most famous sidewalk in Hollywood on an orientation
                      tour”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="itinerary__card"
                  style={{
                    backgroundImage: `url(${require("../../../assets/img/background/sky.png")})`,
                  }}
                >
                  <div class="iti__content">
                    <span>Day 1</span>
                    <h4>Los Angeles</h4>
                    <p class="pShow">
                      “Pack up the van in the morning and check out the stars on
                      the most famous sidewalk in Hollywood on an orientation
                      tour”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* ============ arrow button ========== */}
            <div onClick={() => itinerySwiper.current?.slidePrev()}>
              <button className="itinery__btn itiBtn__prev">
                <i class="ri-arrow-left-line"></i>
              </button>
            </div>
            <div onClick={() => itinerySwiper.current?.slideNext()}>
              <button className="itinery__btn itiBtn__next">
                <i class="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoliItinerary;

// <div class="Itinerary__features">
//             <div class="swiper Itinerary">
//               <div class="swiper-wrapper">
//                 <div class="swiper-slide">
//                   <div
//                     class="itinerary__card"
//                     style={{
//                       backgroundImage: `url(${require("../../../assets/img/background/sky.png")})`,
//                     }}
//                   >
//                     <div class="iti__content">
//                       <span>Day 1</span>
//                       <h4>Los Angeles</h4>
//                       <p class="pShow">
//                         “Pack up the van in the morning and check out the stars
//                         on the most famous sidewalk in Hollywood on an
//                         orientation tour”
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//               <div class="swiper-button-next">
//                 <i class="ri-arrow-right-line"></i>
//               </div>
//               <div class="swiper-button-prev">
//                 <i class="ri-arrow-left-line"></i>
//               </div>
//             </div>
//           </div>

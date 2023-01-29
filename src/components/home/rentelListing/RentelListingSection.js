import { Swiper, SwiperSlide } from "swiper/react";
import { RentelCard } from "./RentelCard";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";

export function RentelListingSection() {
   return (
      <section className="rentelListing__section ">
         <div className="container">
            <div className="row">
               <div className="col-xl-12">
                  <div className="rentelListing__title">
                     <h2>Rentel Listing</h2>
                  </div>
               </div>
               <div className="col-xl-12">
                  <Swiper
                     modules={[Autoplay]}
                     autoplay={{ delay: 1000, disableOnInteraction: false }}
                     speed={2000}
                     loop={true}
                     spaceBetween={20}
                     slidesPerView={1}
                     breakpoints={{
                        768: {
                           slidesPerView: 2,
                           spaceBetween: 20,
                        },
                        992: {
                           slidesPerView: 3,
                           spaceBetween: 20,
                        },
                        1400: {
                           slidesPerView: 3,
                           spaceBetween: 40,
                        },
                     }}
                     className={"rentelSlider"}
                  >
                     <SwiperSlide>
                        <RentelCard />
                     </SwiperSlide>
                     <SwiperSlide>
                        <RentelCard />
                     </SwiperSlide>
                     <SwiperSlide>
                        <RentelCard />
                     </SwiperSlide>
                     <SwiperSlide>
                        <RentelCard />
                     </SwiperSlide>
                     <SwiperSlide>
                        <RentelCard />
                     </SwiperSlide>
                     <SwiperSlide>
                        <RentelCard />
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>
         </div>
      </section>
   );
}

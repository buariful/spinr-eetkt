import React from "react";
import HotelLftTexts from "../../components/hotelComponent/hotelDetails/HotelLftTexts";
import HotelRightContent from "../../components/hotelComponent/hotelDetails/HotelRightContent";
import ServiceInfo from "../../components/shared/serviceInfo/ServiceInfo";
import Map from "../../components/shared/map/Map";
import DetailsPageSlider from "../../components/shared/DetailsPageSlider/DetailsPageSlider";

const HotelDetails = () => {
  return (
    <>
      <section
        className="pageDetails__banner"
        style={{
          backgroundImage: `url(${require("../../assets/img/background/Rectangleoiuio.png")}`,
        }}
      ></section>

      {/*============ hotel details left content ============= */}
      <section class="busStandInfo__section">
        <div class="container-fluid">
          <div class="row mx-1 mx-md-4">
            <div class="col-xl-8 gx-5">
              <ServiceInfo />
              <DetailsPageSlider />
              <HotelLftTexts />
            </div>

            {/*========= hotel details right content ================ */}
            <div
              style={{ padding: "0px 0px 0px 50px" }}
              class="col-xl-4 rentelListing__section"
            >
              <HotelRightContent />
            </div>

            {/* =========== hotel map ================ */}
            <Map />
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelDetails;
